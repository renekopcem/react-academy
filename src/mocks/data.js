// Initial seed data for team members
export const initialTeamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Frontend Developer',
    email: 'sarah@company.com',
    department: 'Engineering',
    avatar:
      'https://ui-avatars.com/api/?name=Sarah+Chen&background=6366f1&color=fff',
  },
  {
    id: 2,
    name: 'Mike Johnson',
    role: 'Backend Developer',
    email: 'mike@company.com',
    department: 'Engineering',
    avatar:
      'https://ui-avatars.com/api/?name=Mike+Johnson&background=8b5cf6&color=fff',
  },
  {
    id: 3,
    name: 'Lisa Rodriguez',
    role: 'UI/UX Designer',
    email: 'lisa@company.com',
    department: 'Design',
    avatar:
      'https://ui-avatars.com/api/?name=Lisa+Rodriguez&background=ec4899&color=fff',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Project Manager',
    email: 'david@company.com',
    department: 'Management',
    avatar:
      'https://ui-avatars.com/api/?name=David+Kim&background=f59e0b&color=fff',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    role: 'DevOps Engineer',
    email: 'emma@company.com',
    department: 'Engineering',
    avatar:
      'https://ui-avatars.com/api/?name=Emma+Wilson&background=10b981&color=fff',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    role: 'Product Designer',
    email: 'alex@company.com',
    department: 'Design',
    avatar:
      'https://ui-avatars.com/api/?name=Alex+Thompson&background=06b6d4&color=fff',
  },
];

// Storage key for localStorage
export const STORAGE_KEY = 'react-academy-team-members';

// Initialize localStorage with seed data if it doesn't exist
export function initializeData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTeamMembers));
    return initialTeamMembers;
  }
  return JSON.parse(stored);
}

// Get data from localStorage
export function getStoredData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : initialTeamMembers;
}

// Save data to localStorage
export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Generate next available ID
export function getNextId(members) {
  if (members.length === 0) return 1;
  return Math.max(...members.map(m => m.id)) + 1;
}
