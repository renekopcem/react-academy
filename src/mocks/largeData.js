import { faker } from '@faker-js/faker';

// Storage key for performance testing dataset
export const PERFORMANCE_STORAGE_KEY = 'react-academy-performance-members';

// Generate large dataset for performance testing
export function generateLargeDataset(count = 1000) {
  const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
  const skills = ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'Java', 'C++', 'Go', 'Rust', 'Swift', 'Kotlin', 'SQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Git', 'Figma', 'Photoshop', 'UI Design', 'UX Research'];

  return Array.from({ length: count }, (_, i) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${lastName}`;
    const department = faker.helpers.arrayElement(departments);

    return {
      id: i + 1,
      name: fullName,
      email: faker.internet.email({ firstName, lastName }).toLowerCase(),
      role: faker.person.jobTitle(),
      department: department,
      joinDate: faker.date.past({ years: 5 }).toISOString(),
      avatar: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=${faker.color.rgb({ format: 'hex' }).slice(1)}&color=fff`,
      phone: faker.phone.number(),
      location: `${faker.location.city()}, ${faker.location.state()}`,
      bio: faker.lorem.paragraph(),
      skills: faker.helpers.arrayElements(skills, { min: 2, max: 6 }),
      projects: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
        name: faker.company.catchPhrase(),
        description: faker.lorem.sentence(),
        status: faker.helpers.arrayElement(['Active', 'Completed', 'On Hold'])
      })),
      salary: faker.number.int({ min: 50000, max: 200000 }),
      experience: faker.number.int({ min: 0, max: 20 })
    };
  });
}

// Initialize performance dataset in localStorage
export function initializePerformanceData() {
  const stored = localStorage.getItem(PERFORMANCE_STORAGE_KEY);
  if (!stored) {
    const data = generateLargeDataset(1000);
    localStorage.setItem(PERFORMANCE_STORAGE_KEY, JSON.stringify(data));
    return data;
  }
  return JSON.parse(stored);
}

// Get performance data from localStorage
export function getPerformanceData() {
  const stored = localStorage.getItem(PERFORMANCE_STORAGE_KEY);
  if (!stored) {
    return initializePerformanceData();
  }
  return JSON.parse(stored);
}

// Save performance data to localStorage
export function savePerformanceData(data) {
  localStorage.setItem(PERFORMANCE_STORAGE_KEY, JSON.stringify(data));
}

// Generate next available ID for performance dataset
export function getNextPerformanceId(members) {
  if (members.length === 0) return 1;
  return Math.max(...members.map(m => m.id)) + 1;
}
