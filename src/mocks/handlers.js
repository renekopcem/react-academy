import { http, HttpResponse, delay } from 'msw';
import { getStoredData, saveData, getNextId, initializeData } from './data.js';
import {
  getPerformanceData,
  savePerformanceData,
  getNextPerformanceId,
  initializePerformanceData,
} from './largeData.js';

// Initialize data on first load
initializeData();
initializePerformanceData();

// ========================================
// ORIGINAL ENDPOINTS (Sessions 6-7)
// ========================================

const originalEndpoints = [
  // GET /api/team-members - Fetch all team members
  http.get('/api/team-members', async () => {
    await delay(500);
    const members = getStoredData();
    console.log('📡 MSW: Fetching all team members', members);
    return HttpResponse.json(members);
  }),

  // GET /api/team-members/:id - Fetch single team member
  http.get('/api/team-members/:id', async ({ params }) => {
    await delay(300);
    const { id } = params;
    const members = getStoredData();
    const member = members.find(m => m.id === Number(id));

    if (!member) {
      console.log(`❌ MSW: Member with id ${id} not found`);
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Member not found',
      });
    }

    console.log('📡 MSW: Fetching member', member);
    return HttpResponse.json(member);
  }),

  // POST /api/team-members - Add new team member
  http.post('/api/team-members', async ({ request }) => {
    await delay(600);
    const newMember = await request.json();
    const members = getStoredData();

    const memberWithId = {
      ...newMember,
      id: getNextId(members),
      createdAt: new Date().toISOString(),
    };

    if (!memberWithId.avatar) {
      const nameParts = memberWithId.name.split(' ');
      const initials = nameParts.map(n => n[0]).join('+');
      memberWithId.avatar = `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff`;
    }

    const updatedMembers = [...members, memberWithId];
    saveData(updatedMembers);

    console.log('✅ MSW: Added new member', memberWithId);
    return HttpResponse.json(memberWithId, { status: 201 });
  }),

  // PUT /api/team-members/:id - Update team member
  http.put('/api/team-members/:id', async ({ params, request }) => {
    await delay(500);
    const { id } = params;
    const updates = await request.json();
    const members = getStoredData();
    const memberIndex = members.findIndex(m => m.id === Number(id));

    if (memberIndex === -1) {
      console.log(`❌ MSW: Cannot update - member ${id} not found`);
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Member not found',
      });
    }

    const updatedMember = {
      ...members[memberIndex],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    members[memberIndex] = updatedMember;
    saveData(members);

    console.log('✏️ MSW: Updated member', updatedMember);
    return HttpResponse.json(updatedMember);
  }),

  // DELETE /api/team-members/:id - Delete team member
  http.delete('/api/team-members/:id', async ({ params }) => {
    await delay(400);
    const { id } = params;
    const members = getStoredData();
    const memberIndex = members.findIndex(m => m.id === Number(id));

    if (memberIndex === -1) {
      console.log(`❌ MSW: Cannot delete - member ${id} not found`);
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Member not found',
      });
    }

    const deletedMember = members[memberIndex];
    const updatedMembers = members.filter(m => m.id !== Number(id));
    saveData(updatedMembers);

    console.log('🗑️ MSW: Deleted member', deletedMember);
    return HttpResponse.json({ success: true, deletedMember });
  }),
];

// ========================================
// PERFORMANCE ENDPOINTS (Session 8)
// ========================================

const performanceEndpoints = [
  // GET /api/performance/team-members - Fetch all team members (large dataset)
  http.get('/api/performance/team-members', async () => {
    await delay(500);
    const members = getPerformanceData();
    console.log(`📡 MSW: Fetching ${members.length} performance team members`);
    return HttpResponse.json(members);
  }),

  // GET /api/performance/team-members/:id - Fetch single team member
  http.get('/api/performance/team-members/:id', async ({ params }) => {
    await delay(300);
    const { id } = params;
    const members = getPerformanceData();
    const member = members.find(m => m.id === Number(id));

    if (!member) {
      console.log(`❌ MSW: Performance member with id ${id} not found`);
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Member not found',
      });
    }

    console.log('📡 MSW: Fetching performance member', member);
    return HttpResponse.json(member);
  }),

  // POST /api/performance/team-members - Add new team member
  http.post('/api/performance/team-members', async ({ request }) => {
    await delay(600);
    const newMember = await request.json();
    const members = getPerformanceData();

    const memberWithId = {
      ...newMember,
      id: getNextPerformanceId(members),
      createdAt: new Date().toISOString(),
      joinDate: new Date().toISOString(),
      bio: newMember.bio || 'New team member',
      skills: newMember.skills || [],
      projects: newMember.projects || [],
      salary: newMember.salary || 75000,
      experience: newMember.experience || 0,
    };

    if (!memberWithId.avatar) {
      const nameParts = memberWithId.name.split(' ');
      const initials = nameParts.map(n => n[0]).join('+');
      memberWithId.avatar = `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff`;
    }

    const updatedMembers = [...members, memberWithId];
    savePerformanceData(updatedMembers);

    console.log('✅ MSW: Added new performance member', memberWithId);
    return HttpResponse.json(memberWithId, { status: 201 });
  }),

  // DELETE /api/performance/team-members/:id - Delete team member
  http.delete('/api/performance/team-members/:id', async ({ params }) => {
    await delay(400);
    const { id } = params;
    const members = getPerformanceData();
    const memberIndex = members.findIndex(m => m.id === Number(id));

    if (memberIndex === -1) {
      console.log(`❌ MSW: Cannot delete - performance member ${id} not found`);
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Member not found',
      });
    }

    const deletedMember = members[memberIndex];
    const updatedMembers = members.filter(m => m.id !== Number(id));
    savePerformanceData(updatedMembers);

    console.log('🗑️ MSW: Deleted performance member', deletedMember);
    return HttpResponse.json({ success: true, deletedMember });
  }),
];

// Export all handlers
export const handlers = [...originalEndpoints, ...performanceEndpoints];
