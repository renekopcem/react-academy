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
  {
    id: '3',
    name: 'Carol Williams',
    email: 'carol@company.com',
    role: 'Product Manager',
    department: 'Product',
    avatar: 'https://i.pravatar.cc/150?u=carol',
    skills: ['Agile'],
  },
];

describe('TeamList Component', () => {
  // ============================================
  // LOADING STATE TESTS
  // ============================================

  describe('Loading State', () => {
    it('displays loading indicator when isLoading is true', () => {
      render(<TeamList members={[]} isLoading={true} />);

      expect(screen.getByText(/loading team members/i)).toBeInTheDocument();
    });

    it('loading state has correct role for accessibility', () => {
      render(<TeamList members={[]} isLoading={true} />);

      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('does not display members while loading', () => {
      render(<TeamList members={mockMembers} isLoading={true} />);

      expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
    });
  });

  // ============================================
  // EMPTY STATE TESTS
  // ============================================

  describe('Empty State', () => {
    it('displays empty state when members array is empty', () => {
      render(<TeamList members={[]} isLoading={false} />);

      expect(screen.getByText(/no team members found/i)).toBeInTheDocument();
    });

    it('displays empty state when members is null', () => {
      render(<TeamList members={null} isLoading={false} />);

      expect(screen.getByText(/no team members found/i)).toBeInTheDocument();
    });

    it('shows helpful hint in empty state', () => {
      render(<TeamList members={[]} isLoading={false} />);

      expect(screen.getByText(/try adjusting/i)).toBeInTheDocument();
    });
  });

  // ============================================
  // RENDERING MEMBERS TESTS
  // ============================================

  describe('Rendering Members', () => {
    it('renders all team members', () => {
      render(<TeamList members={mockMembers} isLoading={false} />);

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
      expect(screen.getByText('Bob Smith')).toBeInTheDocument();
      expect(screen.getByText('Carol Williams')).toBeInTheDocument();
    });

    it('renders correct number of member cards', () => {
      render(<TeamList members={mockMembers} isLoading={false} />);

      const memberCards = screen.getAllByTestId(/team-member-/);
      expect(memberCards).toHaveLength(3);
    });

    it('renders team section with accessible label', () => {
      render(<TeamList members={mockMembers} isLoading={false} />);

      expect(
        screen.getByRole('region', { name: /team members list/i })
      ).toBeInTheDocument();
    });
  });

  // ============================================
  // INTERACTION CALLBACK TESTS
  // ============================================

  describe('Interaction Callbacks', () => {
    it('passes onSelectMember to TeamMember components', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();

      render(
        <TeamList
          members={mockMembers}
          isLoading={false}
          onSelectMember={handleSelect}
        />
      );

      await user.click(screen.getByTestId('team-member-1'));

      expect(handleSelect).toHaveBeenCalledTimes(1);
      expect(handleSelect).toHaveBeenCalledWith(mockMembers[0]);
    });

    it('passes onDeleteMember to TeamMember components', async () => {
      const user = userEvent.setup();
      const handleDelete = vi.fn();

      render(
        <TeamList
          members={mockMembers}
          isLoading={false}
          onDeleteMember={handleDelete}
        />
      );

      await user.click(screen.getByLabelText(/delete alice/i));

      expect(handleDelete).toHaveBeenCalledTimes(1);
      expect(handleDelete).toHaveBeenCalledWith('1');
    });
  });

  // ============================================
  // EDGE CASES
  // ============================================

  describe('Edge Cases', () => {
    it('handles single member correctly', () => {
      render(<TeamList members={[mockMembers[0]]} isLoading={false} />);

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
      expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument();
    });

    it('handles members with missing optional fields', () => {
      const memberWithMinimalData = {
        id: '99',
        name: 'Minimal User',
        email: 'minimal@test.com',
        role: 'Tester',
        department: 'QA',
        avatar: 'https://example.com/avatar.jpg',
        // No skills
      };

      render(<TeamList members={[memberWithMinimalData]} isLoading={false} />);

      expect(screen.getByText('Minimal User')).toBeInTheDocument();
    });
  });
});
