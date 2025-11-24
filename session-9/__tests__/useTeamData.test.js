/**
 * ADVANCED EXERCISE: Testing useTeamData Custom Hook
 *
 * This file is OPTIONAL for the 45-minute session.
 * Focus on component testing first (teamMember.test.jsx, teamDirectory.test.jsx)
 *
 * Hook testing is valuable when you have complex logic in custom hooks.
 * This demonstrates how to use renderHook from React Testing Library.
 *
 * Run tests with: yarn test session-9/__tests__/useTeamData.test.js
 */

/*
import { describe, it, expect } from 'vitest';
import { renderHook, waitFor, act } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server.js';
import { useTeamData } from '../hooks/useTeamData.js';

describe('useTeamData Hook', () => {
  describe('Initial State', () => {
    it('starts with loading state true', () => {
      const { result } = renderHook(() => useTeamData());
      expect(result.current.isLoading).toBe(true);
    });

    it('starts with empty members array', () => {
      const { result } = renderHook(() => useTeamData());
      expect(result.current.members).toEqual([]);
    });
  });

  describe('Data Fetching', () => {
    it('fetches and returns team members', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.members).toHaveLength(5);
    });
  });

  describe('Error Handling', () => {
    it('handles server error', async () => {
      server.use(
        http.get('/api/team-members', () => {
          return HttpResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
          );
        })
      );

      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.error).toContain('500');
    });
  });

  describe('Delete Member', () => {
    it('removes member from list', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const initialLength = result.current.members.length;

      await act(async () => {
        await result.current.deleteMember('1');
      });

      expect(result.current.members).toHaveLength(initialLength - 1);
    });
  });
});
*/

// This file is commented out for the 45-minute session.
// Uncomment the tests above to practice custom hook testing with renderHook.
import { describe, it } from 'vitest';

describe.skip('useTeamData Hook (ADVANCED BONUS)', () => {
  it('placeholder - uncomment tests above to enable', () => {});
});
