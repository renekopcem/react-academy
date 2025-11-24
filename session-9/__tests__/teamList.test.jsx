/**
 * BONUS EXERCISE: Testing TeamList Component
 *
 * This file is OPTIONAL - focus on teamMember.test.jsx and
 * teamDirectory.test.jsx first.
 *
 * TeamList is a wrapper component that handles loading/empty states.
 * These tests are useful for learning state-based rendering tests.
 *
 * Run tests with: yarn test session-9/__tests__/teamList.test.jsx
 */

/*
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TeamList from '../components/teamList.jsx';

// Sample members data
const mockMembers = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@company.com',
    role: 'Frontend Developer',
    department: 'Engineering',
    avatar: 'https://i.pravatar.cc/150?u=alice',
    skills: ['React'],
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@company.com',
    role: 'Backend Developer',
    department: 'Engineering',
    avatar: 'https://i.pravatar.cc/150?u=bob',
    skills: ['Node.js'],
  },
];

describe('TeamList Component', () => {
  describe('Loading State', () => {
    it('displays loading indicator when isLoading is true', () => {
      render(<TeamList members={[]} isLoading={true} />);
      // Assert that "loading" text is displayed
    });
  });

  describe('Empty State', () => {
    it('displays empty state when members array is empty', () => {
      render(<TeamList members={[]} isLoading={false} />);
      // Assert the empty state message is displayed
    });
  });

  describe('Rendering Members', () => {
    it('renders all team members', () => {
      render(<TeamList members={mockMembers} isLoading={false} />);
      // Assert both Alice and Bob are displayed
    });
  });

  describe('Callbacks', () => {
    it('calls onSelectMember when member is clicked', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();

      render(
        <TeamList
          members={mockMembers}
          isLoading={false}
          onSelectMember={handleSelect}
        />
      );

      // Click on the first team member card
      // Assert handleSelect was called
    });
  });
});
*/

// This file is commented out for the 45-minute session.
// Uncomment the tests above to practice additional testing patterns.
import { describe, it } from 'vitest';

describe.skip('TeamList Component (BONUS)', () => {
  it('placeholder - uncomment tests above to enable', () => {});
});
