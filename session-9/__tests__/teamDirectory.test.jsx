/**
 * EXERCISE: Integration Testing TeamDirectory
 *
 * This is the most important exercise! Integration tests verify
 * that multiple components work together correctly.
 *
 * Run tests with: yarn test session-9/__tests__/teamDirectory.test.jsx
 */

import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server.js';
import TeamDirectory from '../components/teamDirectory.jsx';

describe('TeamDirectory Component', () => {
  // ============================================
  // EXERCISE 1: Async Data Loading
  // ============================================

  describe('Loading and Data Display', () => {
    it('shows loading state initially', () => {
      render(<TeamDirectory />);

      // TODO: Assert loading text is displayed
      // Hint: screen.getByText(/loading/i)
    });

    it('displays team members after loading', async () => {
      render(<TeamDirectory />);

      // TODO: Use findByText to wait for data to appear
      // findBy* returns a Promise and waits automatically
      // await screen.findByText('Alice Johnson');
      // Then assert other members are also displayed
    });
  });

  // ============================================
  // EXERCISE 2: Search Integration Test
  // ============================================

  describe('Search Functionality', () => {
    it('filters members by name', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      // Wait for data to load
      await screen.findByText('Alice Johnson');

      // TODO: Type 'Alice' into the search input
      // Hint: await user.type(screen.getByPlaceholderText(/search/i), 'Alice');

      // Assert Alice is visible
      // Assert Bob is NOT visible (use queryByText which returns null)
    });
  });
});

// ============================================
// BONUS EXERCISES (if time permits)
// ============================================
/*
describe('TeamDirectory - Bonus Exercises', () => {
  describe('Error State', () => {
    it('displays error message when API fails', async () => {
      // Override MSW handler to return error
      server.use(
        http.get('/api/team-members', () => {
          return HttpResponse.json(
            { error: 'Server error' },
            { status: 500 }
          );
        })
      );

      render(<TeamDirectory />);

      // Wait for error alert: await screen.findByRole('alert')
      // Assert error text is displayed
    });
  });

  describe('Member Selection', () => {
    it('opens detail modal when member is clicked', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      // Click on Alice's card
      // Assert dialog appears: screen.getByRole('dialog')
    });
  });

  describe('Delete Member', () => {
    it('removes member when delete button is clicked', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      // Click delete button for Alice: getByLabelText(/delete alice/i)
      // Use waitFor to assert Alice is removed
    });
  });

  describe('Complete User Flow', () => {
    it('search, select, close, and delete flow', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      // 1. Search for 'Bob'
      // 2. Click on Bob to open modal
      // 3. Assert modal shows Bob's email
      // 4. Close the modal
      // 5. Clear the search
      // 6. Delete Alice
      // 7. Assert Alice is gone but Bob is still there
    });
  });
});
*/
