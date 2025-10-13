# Mock Team API Documentation

This is a client-side mock API powered by **MSW (Mock Service Worker)** for Session 6: React Query.

## Features

- Real `fetch()` calls to real endpoints
- Data persists in `localStorage` across page refreshes
- Realistic network delays (300-600ms)
- Visible in Browser DevTools Network tab
- No backend server needed

## Available Endpoints

### GET /api/team-members
Fetch all team members.

**Example:**
```js
const response = await fetch('/api/team-members');
const members = await response.json();
console.log(members); // Array of team members
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

**Response:** Single member object or 404 if not found.

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

**Response:** The created member with auto-generated `id` and `createdAt` timestamp.

---

### PUT /api/team-members/:id
Update an existing team member.

**Example:**
```js
const response = await fetch('/api/team-members/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    role: 'Senior Frontend Developer'
  })
});
const updatedMember = await response.json();
```

**Response:** The updated member object or 404 if not found.

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

**Response:** Success message with the deleted member data, or 404 if not found.

---

## React Query Examples

### Query - Fetch all members
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
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['team-members'] });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      name: 'John Doe',
      role: 'Developer',
      email: 'john@company.com',
      department: 'Engineering'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Adding...' : 'Add Member'}
      </button>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Member added successfully!</div>}
    </form>
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

To reset the team members to the initial seed data:

```js
localStorage.removeItem('react-academy-team-members');
// Refresh the page
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
