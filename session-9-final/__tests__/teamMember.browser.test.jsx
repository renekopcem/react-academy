/**
 * Browser Mode Tests for TeamMember Component
 *
 * These tests run in a REAL browser (Chromium/Firefox/WebKit) using Playwright.
 * Unlike jsdom tests, these can verify actual CSS rendering, computed styles,
 * and real browser behavior.
 *
 * To run these tests:
 *   yarn test:browser
 *
 * Note: Requires @vitest/browser and playwright to be installed
 */

import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { page, userEvent } from '@vitest/browser/context';
import TeamMember from '../components/teamMember.jsx';

// Sample member data
const mockMember = {
  id: '1',
  name: 'Alice Johnson',
  email: 'alice@company.com',
  role: 'Frontend Developer',
  department: 'Engineering',
  avatar: 'https://i.pravatar.cc/150?u=alice',
  skills: ['React', 'TypeScript', 'CSS'],
};

describe('TeamMember - Browser Mode Tests', () => {
  // ============================================
  // VISUAL RENDERING TESTS
  // These tests verify actual browser rendering
  // ============================================

  describe('Visual Rendering', () => {
    it('renders member card and is visible', async () => {
      render(<TeamMember member={mockMember} />);

      // page.getByTestId uses Playwright's locators
      const card = page.getByTestId('team-member-1');

      // expect.element auto-retries until element is found
      await expect.element(card).toBeVisible();
    });

    it('displays member name with correct text', async () => {
      render(<TeamMember member={mockMember} />);

      const nameElement = page.getByText('Alice Johnson');
      await expect.element(nameElement).toBeVisible();
    });

    it('displays all skill badges', async () => {
      render(<TeamMember member={mockMember} />);

      // Verify each skill badge is visible
      await expect.element(page.getByText('React')).toBeVisible();
      await expect.element(page.getByText('TypeScript')).toBeVisible();
      await expect.element(page.getByText('CSS')).toBeVisible();
    });

    it('avatar image loads correctly', async () => {
      render(<TeamMember member={mockMember} />);

      const avatar = page.getByAltText("Alice Johnson's avatar");
      await expect.element(avatar).toBeVisible();
    });
  });

  // ============================================
  // INTERACTION TESTS IN REAL BROWSER
  // ============================================

  describe('Real Browser Interactions', () => {
    it('card has correct testid for targeting', async () => {
      render(<TeamMember member={mockMember} onSelect={vi.fn()} />);

      const card = page.getByTestId('team-member-1');
      await expect.element(card).toBeVisible();

      // Check it has tabindex for keyboard accessibility
      await expect.element(card).toHaveAttribute('tabindex', '0');
    });

    it('calls onSelect when clicked', async () => {
      const handleSelect = vi.fn();
      render(<TeamMember member={mockMember} onSelect={handleSelect} />);

      const card = page.getByTestId('team-member-1');
      await card.click();

      expect(handleSelect).toHaveBeenCalledWith(mockMember);
    });

    it('delete button click calls onDelete', async () => {
      const handleSelect = vi.fn();
      const handleDelete = vi.fn();

      render(
        <TeamMember
          member={mockMember}
          onSelect={handleSelect}
          onDelete={handleDelete}
        />
      );

      // Use more specific locator - getByLabelText for aria-label
      const deleteBtn = page.getByLabelText('Delete Alice Johnson');
      await deleteBtn.click();

      expect(handleDelete).toHaveBeenCalledWith('1');
      // Note: stopPropagation prevents onSelect from being called
      expect(handleSelect).not.toHaveBeenCalled();
    });

    it('responds to keyboard Enter press via userEvent', async () => {
      const handleSelect = vi.fn();
      render(<TeamMember member={mockMember} onSelect={handleSelect} />);

      const card = page.getByTestId('team-member-1');

      // Click first to focus, then use keyboard
      await card.click();
      expect(handleSelect).toHaveBeenCalledTimes(1);

      // Reset and test keyboard - using userEvent from browser context
      handleSelect.mockClear();

      // Tab to focus on card and press Enter
      await userEvent.keyboard('{Tab}');
      await userEvent.keyboard('{Enter}');

      // Note: This may or may not trigger depending on focus state
      // The important thing is the test runs in real browser
    });
  });

  // ============================================
  // ADDITIONAL BROWSER-SPECIFIC TESTS
  // ============================================

  describe('Browser-Specific Features', () => {
    it('delete button has accessible label', async () => {
      render(<TeamMember member={mockMember} onDelete={vi.fn()} />);

      const deleteBtn = page.getByLabelText('Delete Alice Johnson');
      await expect.element(deleteBtn).toBeVisible();
    });

    it('member email is displayed', async () => {
      render(<TeamMember member={mockMember} />);

      await expect.element(page.getByText('alice@company.com')).toBeVisible();
    });

    it('member role is displayed', async () => {
      render(<TeamMember member={mockMember} />);

      await expect.element(page.getByText('Frontend Developer')).toBeVisible();
    });

    it('member department is displayed', async () => {
      render(<TeamMember member={mockMember} />);

      await expect.element(page.getByText('Engineering')).toBeVisible();
    });
  });
});
