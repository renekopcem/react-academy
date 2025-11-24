import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TeamMember from '../components/teamMember.jsx';

// Sample member data for tests
const mockMember = {
  id: '1',
  name: 'Alice Johnson',
  email: 'alice@company.com',
  role: 'Frontend Developer',
  department: 'Engineering',
  avatar: 'https://i.pravatar.cc/150?u=alice',
  skills: ['React', 'TypeScript', 'CSS'],
};

describe('TeamMember Component', () => {
  // ============================================
  // RENDERING TESTS
  // ============================================

  describe('Rendering', () => {
    it('renders member name', () => {
      render(<TeamMember member={mockMember} />);

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    it('renders member role', () => {
      render(<TeamMember member={mockMember} />);

      expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    });

    it('renders member department', () => {
      render(<TeamMember member={mockMember} />);

      expect(screen.getByText('Engineering')).toBeInTheDocument();
    });

    it('renders member email', () => {
      render(<TeamMember member={mockMember} />);

      expect(screen.getByText('alice@company.com')).toBeInTheDocument();
    });

    it('renders avatar with correct alt text', () => {
      render(<TeamMember member={mockMember} />);

      const avatar = screen.getByAltText("Alice Johnson's avatar");
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('src', mockMember.avatar);
    });

    it('renders skills badges', () => {
      render(<TeamMember member={mockMember} />);

      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('CSS')).toBeInTheDocument();
    });

    it('does not render skills section when no skills provided', () => {
      const memberWithoutSkills = { ...mockMember, skills: [] };
      render(<TeamMember member={memberWithoutSkills} />);

      expect(screen.queryByText('React')).not.toBeInTheDocument();
    });
  });

  // ============================================
  // INTERACTION TESTS
  // ============================================

  describe('User Interactions', () => {
    it('calls onSelect when card is clicked', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();

      render(<TeamMember member={mockMember} onSelect={handleSelect} />);

      await user.click(screen.getByTestId('team-member-1'));

      expect(handleSelect).toHaveBeenCalledTimes(1);
      expect(handleSelect).toHaveBeenCalledWith(mockMember);
    });

    it('calls onSelect when Enter key is pressed', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();

      render(<TeamMember member={mockMember} onSelect={handleSelect} />);

      const card = screen.getByTestId('team-member-1');
      card.focus();
      await user.keyboard('{Enter}');

      expect(handleSelect).toHaveBeenCalledTimes(1);
    });

    it('does not crash when onSelect is not provided', async () => {
      const user = userEvent.setup();

      render(<TeamMember member={mockMember} />);

      // Should not throw error
      await user.click(screen.getByTestId('team-member-1'));
    });
  });

  // ============================================
  // DELETE BUTTON TESTS
  // ============================================

  describe('Delete Functionality', () => {
    it('renders delete button when onDelete is provided', () => {
      const handleDelete = vi.fn();

      render(<TeamMember member={mockMember} onDelete={handleDelete} />);

      expect(
        screen.getByRole('button', { name: /delete alice/i })
      ).toBeInTheDocument();
    });

    it('does not render delete button when onDelete is not provided', () => {
      render(<TeamMember member={mockMember} />);

      expect(
        screen.queryByRole('button', { name: /delete/i })
      ).not.toBeInTheDocument();
    });

    it('calls onDelete with member id when delete button is clicked', async () => {
      const user = userEvent.setup();
      const handleDelete = vi.fn();

      render(<TeamMember member={mockMember} onDelete={handleDelete} />);

      await user.click(screen.getByRole('button', { name: /delete alice/i }));

      expect(handleDelete).toHaveBeenCalledTimes(1);
      expect(handleDelete).toHaveBeenCalledWith('1');
    });

    it('does not trigger onSelect when delete button is clicked', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();
      const handleDelete = vi.fn();

      render(
        <TeamMember
          member={mockMember}
          onSelect={handleSelect}
          onDelete={handleDelete}
        />
      );

      await user.click(screen.getByRole('button', { name: /delete alice/i }));

      expect(handleDelete).toHaveBeenCalledTimes(1);
      expect(handleSelect).not.toHaveBeenCalled();
    });
  });

  // ============================================
  // ACCESSIBILITY TESTS
  // ============================================

  describe('Accessibility', () => {
    it('has correct role attribute', () => {
      render(<TeamMember member={mockMember} onSelect={vi.fn()} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('has correct data-testid for targeting', () => {
      render(<TeamMember member={mockMember} />);

      expect(screen.getByTestId('team-member-1')).toBeInTheDocument();
    });

    it('delete button has accessible label', () => {
      render(<TeamMember member={mockMember} onDelete={vi.fn()} />);

      const deleteButton = screen.getByLabelText('Delete Alice Johnson');
      expect(deleteButton).toBeInTheDocument();
    });
  });
});
