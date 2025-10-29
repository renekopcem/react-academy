import AddMemberForm from './addMemberForm.jsx';
import TeamList from './teamList.jsx';

function TeamDirectory() {
  return (
    <div className="team-directory">
      <div className="team-header">
        <h2>Our Team</h2>
        <p className="team-description">Manage team members with React Query</p>
      </div>

      {/* Add Member Form */}
      <AddMemberForm />

      {/* Team List with useQuery */}
      <TeamList />

      <div className="context-demo">
        <div className="demo-note">
          <h4>🌐 React Query Demo</h4>
          <p>
            <code>TeamList</code> uses <strong>useQuery</strong> to fetch data from the API.
            When you add or delete a member, React Query automatically refetches the data!
          </p>
          <p>
            Open the <strong>React Query DevTools</strong> (bottom-right corner) to see loading states,
            success states, and cache hits in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamDirectory;
