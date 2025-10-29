import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Link,
  Outlet,
  useParams
} from '@tanstack/react-router';
import { QueryClient, QueryClientProvider, useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Suspense } from 'react';
import { startMockWorker } from './mocks/browser.js';

// Initialize MSW
await startMockWorker();

// Create QueryClient with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// API functions that call MSW endpoints
const api = {
  fetchMembers: async () => {
    console.log('📡 Fetching all team members...');
    const response = await fetch('/api/team-members');
    if (!response.ok) throw new Error('Failed to fetch members');
    return response.json();
  },

  fetchMember: async (memberId) => {
    console.log(`📡 Fetching member ${memberId}...`);
    const response = await fetch(`/api/team-members/${memberId}`);
    if (!response.ok) throw new Error('Member not found');
    return response.json();
  },
};

// Root Route - Layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <div className="router-app">
      <nav className="router-nav">
        <div className="nav-brand">
          <span className="nav-icon">👥</span>
          <h2>Team Directory</h2>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link" activeProps={{ className: 'active' }}>
            Home
          </Link>
          <Link to="/members" className="nav-link" activeProps={{ className: 'active' }}>
            Members
          </Link>
        </div>
      </nav>

      <main className="router-content">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>

      <div className="router-info">
        <p>
          💡 <strong>Try this:</strong> Hover over member links to see React Query prefetching in action!
          Open React Query DevTools to see cache updates.
        </p>
      </div>
      <TanStackRouterDevtools initialIsOpen={false} />
    </div>
  ),
});

// Loading Fallback Component
function LoadingFallback() {
  return (
    <div className="loading-state">
      <div className="spinner"></div>
      <p>Loading data...</p>
    </div>
  );
}

// Index Route - Home page
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div className="home-page">
      <h1>Welcome to Team Directory</h1>
      <p className="subtitle">
        This app demonstrates TanStack Router + React Query integration
      </p>

      <div className="feature-cards">
        <div className="feature-card">
          <span className="feature-icon">🗺️</span>
          <h3>Type-Safe Routing</h3>
          <p>Navigate with TanStack Router's powerful routing system</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔄</span>
          <h3>React Query</h3>
          <p>Automatic caching, refetching, and optimistic updates</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h3>useSuspenseQuery</h3>
          <p>Simplified data fetching with React Suspense boundaries</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🎯</span>
          <h3>Smart Prefetching</h3>
          <p>Hover over links to preload data before navigation</p>
        </div>
      </div>

      <Link to="/members" className="cta-button">
        View All Members →
      </Link>
    </div>
  ),
});

// Members List Route - Using useSuspenseQuery
const membersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/members',
  component: MembersListPage,
});

function MembersListPage() {
  const queryClient = useQueryClient();

  // useSuspenseQuery replaces route loaders + loading states
  const { data: members } = useSuspenseQuery({
    queryKey: ['team-members'],
    queryFn: api.fetchMembers,
  });

  // Prefetch member details on hover
  const prefetchMember = (memberId) => {
    queryClient.prefetchQuery({
      queryKey: ['team-member', memberId],
      queryFn: () => api.fetchMember(memberId),
    });
  };

  return (
    <div className="teams-list-page">
      <header className="page-header">
        <h1>All Team Members</h1>
        <p>View and manage your team directory</p>
      </header>

      <div className="members-section">
        <h2>Current Members ({members.length})</h2>

        {members.length === 0 ? (
          <div className="empty-state">
            <p className="empty-icon">👥</p>
            <p>No team members yet</p>
            <p className="empty-hint">Add your first team member above!</p>
          </div>
        ) : (
          <div className="teams-grid">
            {members.map((member) => (
              <Link
                key={member.id}
                to="/members/$memberId"
                params={{ memberId: String(member.id) }}
                className="team-card-link"
                onMouseEnter={() => prefetchMember(member.id)}
              >
                <div className="team-card">
                  <div className="member-avatar-large">
                    <img src={member.avatar} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-description">{member.role}</p>
                  <div className="team-meta">
                    <span className="member-department">
                      {member.department}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="preload-hint">
        <p>
          💡 <strong>Hover over a member card</strong> and open React Query DevTools (bottom right).
          You'll see the query prefetch before you even click!
        </p>
      </div>

      <div className="info-box">
        <h3>🔍 What's Happening Here?</h3>
        <p>
          This page uses <strong>useSuspenseQuery</strong> instead of traditional route loaders:
        </p>
        <pre><code>{`const { data: members } = useSuspenseQuery({
  queryKey: ['team-members'],
  queryFn: api.fetchMembers,
});`}</code></pre>
        <p>
          Benefits: Automatic loading states via Suspense, built-in caching, background refetching,
          and seamless integration with React Query's mutation system.
        </p>
      </div>
    </div>
  );
}

// Member Detail Route - Using useSuspenseQuery
const memberDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/members/$memberId',
  component: MemberDetailPage,
});

function MemberDetailPage() {
  const { memberId } = useParams({ from: '/members/$memberId' });

  // useSuspenseQuery for individual member details
  const { data: member } = useSuspenseQuery({
    queryKey: ['team-member', Number(memberId)],
    queryFn: () => api.fetchMember(Number(memberId)),
  });

  // Also fetch all members for context (will use cache if available)
  const { data: allMembers } = useSuspenseQuery({
    queryKey: ['team-members'],
    queryFn: api.fetchMembers,
  });

  return (
    <div className="team-detail-page">
      <div className="breadcrumb">
        <Link to="/members" className="breadcrumb-link">← Back to Members</Link>
      </div>

      <header className="team-header">
        <div className="member-detail-header">
          <div className="member-avatar-xlarge">
            <img src={member.avatar} alt={member.name} />
          </div>
          <div className="member-detail-info">
            <h1>{member.name}</h1>
            <p className="member-role-large">{member.role}</p>
            <p className="member-department-large">{member.department}</p>
          </div>
        </div>
      </header>

      <div className="member-detail-card">
        <h2>Contact Information</h2>
        <div className="detail-row">
          <strong>Email:</strong>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </div>
        <div className="detail-row">
          <strong>Department:</strong>
          <span>{member.department}</span>
        </div>
        <div className="detail-row">
          <strong>Role:</strong>
          <span>{member.role}</span>
        </div>
        {member.createdAt && (
          <div className="detail-row">
            <strong>Joined:</strong>
            <span>{new Date(member.createdAt).toLocaleDateString()}</span>
          </div>
        )}
      </div>

      <div className="loader-info">
        <h3>🔍 React Query + Suspense in Action</h3>
        <p>
          This page uses <strong>useSuspenseQuery</strong> to fetch member details:
        </p>
        <pre><code>{`const { data: member } = useSuspenseQuery({
  queryKey: ['team-member', Number(memberId)],
  queryFn: () => api.fetchMember(Number(memberId)),
});`}</code></pre>
        <p>
          <strong>Key advantages:</strong>
        </p>
        <ul>
          <li>✅ No loading state management needed - Suspense handles it</li>
          <li>✅ Data is cached - navigate away and back = instant load</li>
          <li>✅ Prefetching on hover makes navigation feel instant</li>
          <li>✅ Background refetching keeps data fresh</li>
          <li>✅ Mutations automatically update the cache</li>
        </ul>
      </div>
    </div>
  );
}

// Create router with route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  membersRoute,
  memberDetailRoute,
]);

const router = createRouter({ routeTree, scrollRestoration: true });

// Main TeamApp component with providers
function TeamApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default TeamApp;
