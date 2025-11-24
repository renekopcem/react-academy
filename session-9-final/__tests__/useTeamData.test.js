import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor, act } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server.js';
import { useTeamData } from '../hooks/useTeamData.js';

describe('useTeamData Hook', () => {
  // ============================================
  // INITIAL STATE TESTS
  // ============================================

  describe('Initial State', () => {
    it('starts with loading state true', () => {
      const { result } = renderHook(() => useTeamData());

      expect(result.current.isLoading).toBe(true);
    });

    it('starts with empty members array', () => {
      const { result } = renderHook(() => useTeamData());

      expect(result.current.members).toEqual([]);
    });

    it('starts with no error', () => {
      const { result } = renderHook(() => useTeamData());

      expect(result.current.error).toBeNull();
    });
  });

  // ============================================
  // DATA FETCHING TESTS
  // ============================================

  describe('Data Fetching', () => {
    it('fetches and returns team members', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.members).toHaveLength(5);
      expect(result.current.members[0].name).toBe('Alice Johnson');
    });

    it('sets loading to false after fetch completes', async () => {
      const { result } = renderHook(() => useTeamData());

      expect(result.current.isLoading).toBe(true);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });
    });

    it('clears error on successful fetch', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.error).toBeNull();
    });
  });

  // ============================================
  // ERROR HANDLING TESTS
  // ============================================

  describe('Error Handling', () => {
    it('handles server error', async () => {
      // Override handler to return error
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
      expect(result.current.members).toEqual([]);
    });

    it('handles network error', async () => {
      server.use(
        http.get('/api/team-members', () => {
          return HttpResponse.error();
        })
      );

      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.error).toBeTruthy();
    });
  });

  // ============================================
  // DELETE MEMBER TESTS
  // ============================================

  describe('Delete Member', () => {
    it('removes member from list on successful delete', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const initialLength = result.current.members.length;

      await act(async () => {
        await result.current.deleteMember('1');
      });

      expect(result.current.members).toHaveLength(initialLength - 1);
      expect(result.current.members.find(m => m.id === '1')).toBeUndefined();
    });

    it('returns true on successful delete', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      let deleteResult;
      await act(async () => {
        deleteResult = await result.current.deleteMember('1');
      });

      expect(deleteResult).toBe(true);
    });

    it('handles delete error gracefully', async () => {
      server.use(
        http.delete('/api/team-members/:id', () => {
          return HttpResponse.json({ error: 'Delete failed' }, { status: 500 });
        })
      );

      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const initialLength = result.current.members.length;

      let deleteResult;
      await act(async () => {
        deleteResult = await result.current.deleteMember('1');
      });

      expect(deleteResult).toBe(false);
      expect(result.current.members).toHaveLength(initialLength);
      expect(result.current.error).toBeTruthy();
    });
  });

  // ============================================
  // ADD MEMBER TESTS
  // ============================================

  describe('Add Member', () => {
    it('adds new member to list', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const initialLength = result.current.members.length;
      const newMember = {
        name: 'New User',
        email: 'new@company.com',
        role: 'Designer',
        department: 'Design',
      };

      await act(async () => {
        await result.current.addMember(newMember);
      });

      expect(result.current.members).toHaveLength(initialLength + 1);
      expect(result.current.members[initialLength].name).toBe('New User');
    });

    it('returns created member with id', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const newMember = {
        name: 'New User',
        email: 'new@company.com',
        role: 'Designer',
        department: 'Design',
      };

      let createdMember;
      await act(async () => {
        createdMember = await result.current.addMember(newMember);
      });

      expect(createdMember).toHaveProperty('id');
      expect(createdMember.name).toBe('New User');
    });
  });

  // ============================================
  // REFETCH TESTS
  // ============================================

  describe('Refetch', () => {
    it('provides refetch function', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(typeof result.current.refetch).toBe('function');
    });

    it('refetch reloads data', async () => {
      const { result } = renderHook(() => useTeamData());

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      // Trigger refetch
      await act(async () => {
        await result.current.refetch();
      });

      expect(result.current.members).toHaveLength(5);
    });
  });
});
