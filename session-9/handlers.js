import { http, HttpResponse, delay } from 'msw';
import { faker } from '@faker-js/faker';

// Set a seed for reproducible test data
faker.seed(123);

/**
 * Generate a mock team member using Faker
 * Faker provides realistic fake data for testing
 */
function generateMockMember(id) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: String(id),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    role: faker.person.jobTitle(),
    department: faker.commerce.department(),
    location: faker.location.city(),
    avatar: faker.image.avatar(),
    joinDate: faker.date.past({ years: 3 }).toISOString().split('T')[0],
    skills: faker.helpers.arrayElements(
      [
        'React',
        'TypeScript',
        'Node.js',
        'Python',
        'CSS',
        'GraphQL',
        'AWS',
        'Docker',
      ],
      { min: 2, max: 4 }
    ),
  };
}

// Generate a fixed set of mock team members for consistent testing
// Using seed ensures we get the same data across test runs
const mockTeamMembers = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@company.com',
    role: 'Frontend Developer',
    department: 'Engineering',
    location: 'New York',
    avatar: faker.image.avatar(),
    joinDate: '2023-01-15',
    skills: ['React', 'TypeScript', 'CSS'],
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@company.com',
    role: 'Backend Developer',
    department: 'Engineering',
    location: 'San Francisco',
    avatar: faker.image.avatar(),
    joinDate: '2022-06-20',
    skills: ['Node.js', 'Python', 'PostgreSQL'],
  },
  {
    id: '3',
    name: 'Carol Williams',
    email: 'carol@company.com',
    role: 'Product Manager',
    department: 'Product',
    location: 'Chicago',
    avatar: faker.image.avatar(),
    joinDate: '2021-11-10',
    skills: ['Agile', 'Roadmapping', 'User Research'],
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david@company.com',
    role: 'UX Designer',
    department: 'Design',
    location: 'Austin',
    avatar: faker.image.avatar(),
    joinDate: '2023-03-25',
    skills: ['Figma', 'User Testing', 'Prototyping'],
  },
  {
    id: '5',
    name: 'Emma Davis',
    email: 'emma@company.com',
    role: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Seattle',
    avatar: faker.image.avatar(),
    joinDate: '2022-09-01',
    skills: ['Docker', 'Kubernetes', 'AWS'],
  },
];

// Request handlers for API endpoints
export const handlers = [
  // GET /api/team-members - Fetch all team members
  http.get('/api/team-members', async () => {
    // Simulate network delay (50ms)
    await delay(50);

    return HttpResponse.json(mockTeamMembers);
  }),

  // GET /api/team-members/:id - Fetch single team member
  http.get('/api/team-members/:id', async ({ params }) => {
    await delay(50);

    const member = mockTeamMembers.find(m => m.id === params.id);

    if (!member) {
      return HttpResponse.json({ error: 'Member not found' }, { status: 404 });
    }

    return HttpResponse.json(member);
  }),

  // POST /api/team-members - Create new team member
  http.post('/api/team-members', async ({ request }) => {
    await delay(50);

    const newMember = await request.json();
    const createdMember = {
      ...newMember,
      id: String(mockTeamMembers.length + 1),
      joinDate: new Date().toISOString().split('T')[0],
    };

    return HttpResponse.json(createdMember, { status: 201 });
  }),

  // DELETE /api/team-members/:id - Delete team member
  http.delete('/api/team-members/:id', async ({ params }) => {
    await delay(50);

    const memberIndex = mockTeamMembers.findIndex(m => m.id === params.id);

    if (memberIndex === -1) {
      return HttpResponse.json({ error: 'Member not found' }, { status: 404 });
    }

    return HttpResponse.json({ success: true });
  }),

  // PUT /api/team-members/:id - Update team member
  http.put('/api/team-members/:id', async ({ params, request }) => {
    await delay(50);

    const updates = await request.json();
    const member = mockTeamMembers.find(m => m.id === params.id);

    if (!member) {
      return HttpResponse.json({ error: 'Member not found' }, { status: 404 });
    }

    const updatedMember = { ...member, ...updates };
    return HttpResponse.json(updatedMember);
  }),
];

// Export utilities for tests
export { mockTeamMembers, generateMockMember };
