# Mock Team API Documentation

This is a client-side mock API powered by **MSW (Mock Service Worker)** for React Academy sessions.

## Features

- Real `fetch()` calls to real endpoints
- Data persists in `localStorage` across page refreshes
- Realistic network delays (300-600ms)
- Visible in Browser DevTools Network tab
- No backend server needed
- Separate endpoints for different sessions

## Available Endpoint Groups

### 1. Original Endpoints (Sessions 6-7)
Small dataset with 6 team members. Uses localStorage key: `'react-academy-team-members'`

### 2. Performance Endpoints (Session 8)
Large dataset with 1000 team members for performance testing. Uses localStorage key: `'react-academy-performance-members'`

---

## Original Endpoints (Sessions 6-7)

### GET /api/team-members
Fetch all team members (6 members).

**Example:**
```js
const response = await fetch('/api/team-members');
const members = await response.json();
console.log(members); // Array of 6 team members
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Sarah Chen",
    "role": "Frontend Developer",
    "email": "sarah@company.com",
    "department": "Engineering",
    "avatar": "https://ui-avatars.com/api/..."
  },
  ...
]
```

---

### GET /api/team-members/:id
Fetch a single team member by ID.

**Example:**
```js
const response = await fetch('/api/team-members/1');
const member = await response.json();
```

---

### POST /api/team-members
Add a new team member.

**Example:**
```js
const response = await fetch('/api/team-members', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    role: 'Full Stack Developer',
    email: 'john@company.com',
    department: 'Engineering'
  })
});
const newMember = await response.json();
```

---

### PUT /api/team-members/:id
Update an existing team member.

---

### DELETE /api/team-members/:id
Delete a team member.

**Example:**
```js
const response = await fetch('/api/team-members/1', {
  method: 'DELETE'
});
const result = await response.json();
console.log(result); // { success: true, deletedMember: {...} }
```

---

## Performance Endpoints (Session 8)

### GET /api/performance/team-members
Fetch all team members (1000 members for performance testing).

**Example:**
```js
const response = await fetch('/api/performance/team-members');
const members = await response.json();
console.log(members); // Array of 1000 team members
```

**Response:**
Each member includes:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Software Engineer",
  "department": "Engineering",
  "joinDate": "2020-05-15T00:00:00.000Z",
  "avatar": "https://ui-avatars.com/api/...",
  "phone": "+1-555-0123",
  "location": "San Francisco, CA",
  "bio": "Experienced software engineer...",
  "skills": ["JavaScript", "React", "Node.js"],
  "projects": [
    {
      "name": "Project Alpha",
      "description": "Important project",
      "status": "Active"
    }
  ],
  "salary": 120000,
  "experience": 5
}
```

---

### GET /api/performance/team-members/:id
Fetch a single team member by ID from the large dataset.

---

### POST /api/performance/team-members
Add a new team member to the performance dataset.

---

### DELETE /api/performance/team-members/:id
Delete a team member from the performance dataset.

---

## React Query Examples

### Query - Fetch all members (original)
```js
import { useQuery } from '@tanstack/react-query';

function TeamList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['team-members'],
    queryFn: async () => {
      const response = await fetch('/api/team-members');
      if (!response.ok) throw new Error('Failed to fetch');
      return response.json();
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map(member => (
        <div key={member.id}>{member.name}</div>
      ))}
    </div>
  );
}
```

### Query - Fetch performance dataset (Session 8)
```js
const { data, isLoading } = useQuery({
  queryKey: ['performance-members'],
  queryFn: async () => {
    const response = await fetch('/api/performance/team-members');
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
  }
});
```

### Mutation - Add new member
```js
import { useMutation, useQueryClient } from '@tanstack/react-query';

function AddMemberForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newMember) => {
      const response = await fetch('/api/team-members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMember)
      });
      if (!response.ok) throw new Error('Failed to add member');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team-members'] });
    }
  });

  return (
    <button onClick={() => mutation.mutate({...})}>
      Add Member
    </button>
  );
}
```

### Mutation - Delete member
```js
const deleteMutation = useMutation({
  mutationFn: async (memberId) => {
    const response = await fetch(`/api/team-members/${memberId}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete member');
    return response.json();
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['team-members'] });
  }
});
```

---

## How It Works

1. **MSW intercepts fetch requests** at the network level
2. **Handlers** process the request and return mock responses
3. **localStorage** stores the data so it persists across page refreshes
4. **Network delays** are simulated to mimic real API behavior
5. **Browser DevTools** shows the requests in the Network tab

## Reset Data

To reset the original team members:
```js
localStorage.removeItem('react-academy-team-members');
```

To reset the performance dataset:
```js
localStorage.removeItem('react-academy-performance-members');
```

Or clear all localStorage:
```js
localStorage.clear();
```

---

## Console Logs

MSW logs all requests to the console:
- 📡 Fetching operations
- ✅ Successful additions
- ✏️ Updates
- 🗑️ Deletions
- ❌ Errors (404s, etc.)

Check your browser console to see these logs!
