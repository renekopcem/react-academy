/**
 * EXERCISE: Testing TeamMember Component
 *
 * In this exercise, you'll write tests for the TeamMember component.
 * Replace the TODO comments with your test assertions.
 *
 * Run tests with: yarn test session-9/__tests__/teamMember.test.jsx
 */

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
  // EXERCISE 1: Basic Rendering
  // ============================================

  describe('Rendering', () => {
    it('renders member name', () => {
      render(<TeamMember member={mockMember} />);

      // TODO: Assert that the member's name is in the document
      // Hint: Use screen.getByText() and expect().toBeInTheDocument()
    });

    it('renders member role and department', () => {
      render(<TeamMember member={mockMember} />);

      // TODO: Assert that the role and department are displayed
      // Hint: screen.getByText('Frontend Developer')
    });
  });

  // ============================================
  // EXERCISE 2: User Interactions
  // ============================================

  describe('User Interactions', () => {
    it('calls onSelect when card is clicked', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();

      render(<TeamMember member={mockMember} onSelect={handleSelect} />);

      // TODO: Click on the team member card
      // Hint: Use screen.getByTestId('team-member-1')
      // Then assert handleSelect was called with the member
    });
  });

  // ============================================
  // EXERCISE 3: Conditional Rendering
  // ============================================

  describe('Conditional Rendering', () => {
    it('does not render delete button when onDelete is not provided', () => {
      render(<TeamMember member={mockMember} />);

      // TODO: Use queryByRole or queryByLabelText to find delete button
      // Assert it is NOT in the document
      // Hint: queryBy returns null if not found, getBy throws
    });
  });
});

// ============================================
// BONUS EXERCISES (if time permits)
// ============================================
/*
describe('TeamMember - Bonus Exercises', () => {
  it('renders avatar with correct alt text', () => {
    render(<TeamMember member={mockMember} />);
    // Find the avatar image using getByAltText
    // The alt text should be "[name]'s avatar"
  });

  it('renders skills badges', () => {
    render(<TeamMember member={mockMember} />);
    // Assert that each skill is displayed: 'React', 'TypeScript', 'CSS'
  });

  it('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    const handleDelete = vi.fn();
    render(<TeamMember member={mockMember} onDelete={handleDelete} />);
    // Click delete button and assert handleDelete was called with '1'
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
    // Click delete button
    // Assert handleDelete was called but handleSelect was NOT (stopPropagation)
  });
});
*/
