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

      
    </div>
  );
}

export default TeamDirectory;
