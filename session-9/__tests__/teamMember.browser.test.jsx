/**
 * DEMO: Browser Mode Tests for TeamMember Component
 *
 * These tests run in a REAL browser (Chromium) using Playwright.
 * Unlike jsdom tests, these verify actual browser rendering.
 *
 * To run: yarn test:browser
 *
 * Key differences from jsdom:
 * - Uses `page` from @vitest/browser/context for locators
 * - Uses `await expect.element()` which auto-retries
 * - Tests run in actual browser, not simulated DOM
 */

import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { page } from '@vitest/browser/context';
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

describe('TeamMember - Browser Mode Demo', () => {
  // ============================================
  // EXERCISE: Browser Mode Testing
  // ============================================

  it('renders member card in real browser', async () => {
    render(<TeamMember member={mockMember} />);

    // page.getByText uses Playwright locators (not RTL screen)
    const nameElement = page.getByText('Alice Johnson');

    // expect.element auto-retries until element is found
    await expect.element(nameElement).toBeVisible();
  });

  it('handles click interaction in real browser', async () => {
    const handleSelect = vi.fn();
    render(<TeamMember member={mockMember} onSelect={handleSelect} />);

    // Use page locators for real browser interactions
    const card = page.getByTestId('team-member-1');
    await card.click();

    expect(handleSelect).toHaveBeenCalledWith(mockMember);
  });
});

// ============================================
// BONUS: More Browser Tests (if time permits)
// ============================================
/*
describe('TeamMember - Browser Bonus Tests', () => {
  it('displays all skill badges', async () => {
    render(<TeamMember member={mockMember} />);

    await expect.element(page.getByText('React')).toBeVisible();
    await expect.element(page.getByText('TypeScript')).toBeVisible();
    await expect.element(page.getByText('CSS')).toBeVisible();
  });

  it('avatar image loads correctly', async () => {
    render(<TeamMember member={mockMember} />);

    const avatar = page.getByAltText("Alice Johnson's avatar");
    await expect.element(avatar).toBeVisible();
  });

  it('delete button has accessible label', async () => {
    render(<TeamMember member={mockMember} onDelete={vi.fn()} />);

    const deleteBtn = page.getByLabelText('Delete Alice Johnson');
    await expect.element(deleteBtn).toBeVisible();
  });

  it('has tabindex for keyboard accessibility', async () => {
    render(<TeamMember member={mockMember} onSelect={vi.fn()} />);

    const card = page.getByTestId('team-member-1');
    await expect.element(card).toHaveAttribute('tabindex', '0');
  });
});
*/
