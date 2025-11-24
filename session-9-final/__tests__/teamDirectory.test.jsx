import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server.js';
import TeamDirectory from '../components/teamDirectory.jsx';

describe('TeamDirectory Component', () => {
  // ============================================
  // LOADING STATE TESTS
  // ============================================

  describe('Loading State', () => {
    it('shows loading state initially', () => {
      render(<TeamDirectory />);

      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('hides loading state after data loads', async () => {
      render(<TeamDirectory />);

      await waitFor(() => {
        expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      });
    });
  });

  // ============================================
  // DATA DISPLAY TESTS
  // ============================================

  describe('Data Display', () => {
    it('displays team members after loading', async () => {
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
      expect(screen.getByText('Bob Smith')).toBeInTheDocument();
      expect(screen.getByText('Carol Williams')).toBeInTheDocument();
    });

    it('displays member count', async () => {
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      expect(screen.getByText(/showing 5 of 5 members/i)).toBeInTheDocument();
    });
  });

  // ============================================
  // ERROR STATE TESTS
  // ============================================

  describe('Error State', () => {
    it('displays error message when API fails', async () => {
      server.use(
        http.get('/api/team-members', () => {
          return HttpResponse.json({ error: 'Server error' }, { status: 500 });
        })
      );

      render(<TeamDirectory />);

      await screen.findByRole('alert');

      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  // ============================================
  // SEARCH/FILTER TESTS
  // ============================================

  describe('Search Functionality', () => {
    it('filters members by name', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.type(screen.getByPlaceholderText(/search/i), 'Alice');

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
      expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument();
    });

    it('filters members by role', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.type(screen.getByPlaceholderText(/search/i), 'Developer');

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument(); // Frontend Developer
      expect(screen.getByText('Bob Smith')).toBeInTheDocument(); // Backend Developer
      expect(screen.queryByText('Carol Williams')).not.toBeInTheDocument(); // Product Manager
    });

    it('filters members by department', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.type(screen.getByPlaceholderText(/search/i), 'Engineering');

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
      expect(screen.queryByText('Carol Williams')).not.toBeInTheDocument(); // Product dept
    });

    it('shows empty state when no matches found', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.type(screen.getByPlaceholderText(/search/i), 'nonexistent');

      expect(screen.getByText(/no team members found/i)).toBeInTheDocument();
    });

    it('updates member count when filtering', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.type(screen.getByPlaceholderText(/search/i), 'Alice');

      expect(screen.getByText(/showing 1 of 5 members/i)).toBeInTheDocument();
    });

    it('clears filter and shows all members', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      const searchInput = screen.getByPlaceholderText(/search/i);

      await user.type(searchInput, 'Alice');
      expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument();

      await user.clear(searchInput);
      expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    });

    it('search is case insensitive', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.type(screen.getByPlaceholderText(/search/i), 'alice');

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });
  });

  // ============================================
  // MEMBER SELECTION TESTS
  // ============================================

  describe('Member Selection', () => {
    it('opens detail modal when member is clicked', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.click(screen.getByTestId('team-member-1'));

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('displays member details in modal', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.click(screen.getByTestId('team-member-1'));

      // Check modal content
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveTextContent('alice@company.com');
      expect(modal).toHaveTextContent('New York');
    });

    it('closes modal when close button is clicked', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.click(screen.getByTestId('team-member-1'));
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      await user.click(screen.getByLabelText(/close/i));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  // ============================================
  // DELETE MEMBER TESTS
  // ============================================

  describe('Delete Member', () => {
    it('removes member when delete button is clicked', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      await user.click(screen.getByLabelText(/delete alice/i));

      await waitFor(() => {
        expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
      });
    });

    it('updates member count after deletion', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');
      expect(screen.getByText(/showing 5 of 5 members/i)).toBeInTheDocument();

      await user.click(screen.getByLabelText(/delete alice/i));

      await waitFor(() => {
        expect(screen.getByText(/showing 4 of 4 members/i)).toBeInTheDocument();
      });
    });

    it('closes modal if deleted member was selected', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      // Select member
      await user.click(screen.getByTestId('team-member-1'));
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      // Delete selected member
      await user.click(screen.getByLabelText(/delete alice/i));

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });
  });

  // ============================================
  // INTEGRATION TESTS - FULL USER FLOWS
  // ============================================

  describe('Integration: Complete User Flows', () => {
    it('search, select, and delete flow', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      // Wait for data
      await screen.findByText('Alice Johnson');

      // Search for a member
      await user.type(screen.getByPlaceholderText(/search/i), 'Bob');
      expect(screen.getByText('Bob Smith')).toBeInTheDocument();
      expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();

      // Select the member
      await user.click(screen.getByTestId('team-member-2'));
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      // Close modal
      await user.click(screen.getByLabelText(/close/i));

      // Clear search
      await user.clear(screen.getByPlaceholderText(/search/i));

      // Delete a different member
      await user.click(screen.getByLabelText(/delete alice/i));

      await waitFor(() => {
        expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
      });

      // Verify Bob is still there
      expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    });

    it('handles rapid filter changes', async () => {
      const user = userEvent.setup();
      render(<TeamDirectory />);

      await screen.findByText('Alice Johnson');

      const searchInput = screen.getByPlaceholderText(/search/i);

      // Rapid typing
      await user.type(searchInput, 'A');
      await user.type(searchInput, 'l');
      await user.type(searchInput, 'i');
      await user.type(searchInput, 'c');
      await user.type(searchInput, 'e');

      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });
  });
});
