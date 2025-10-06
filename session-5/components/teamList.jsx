import { useTeam } from '../context/teamContext.jsx';
import TeamMember from './teamMember.jsx';

function TeamList() {
  const { teamMembers, isGridView } = useTeam();

  return (
    <div className={`team-container ${isGridView ? 'grid-view' : 'list-view'}`}>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            member={member}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamList;