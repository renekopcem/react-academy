import { formatDistanceToNow, format } from 'date-fns';

// This is intentionally a "heavy" component to justify lazy loading
// In the broken version, this loads upfront with the main bundle
function TeamMemberDetail({ member, onClose }) {
  const joinedAgo = formatDistanceToNow(new Date(member.joinDate), { addSuffix: true });
  const joinedDate = format(new Date(member.joinDate), 'MMMM dd, yyyy');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <div className="modal-avatar">
            <img src={member.avatar} alt={member.name} />
          </div>
          <div className="modal-header-info">
            <h2>{member.name}</h2>
            <p className="modal-role">{member.role}</p>
            <span className="modal-department">{member.department}</span>
          </div>
        </div>

        <div className="modal-body">
          {/* Contact Section */}
          <div className="detail-section">
            <h3>📧 Contact Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Email:</label>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </div>
              <div className="detail-item">
                <label>Phone:</label>
                <span>{member.phone}</span>
              </div>
              <div className="detail-item">
                <label>Location:</label>
                <span>{member.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Info Section */}
          <div className="detail-section">
            <h3>💼 Professional Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Department:</label>
                <span>{member.department}</span>
              </div>
              <div className="detail-item">
                <label>Experience:</label>
                <span>{member.experience} years</span>
              </div>
              <div className="detail-item">
                <label>Joined:</label>
                <span>{joinedDate} ({joinedAgo})</span>
              </div>
              {member.salary && (
                <div className="detail-item">
                  <label>Salary:</label>
                  <span>${member.salary.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bio Section */}
          {member.bio && (
            <div className="detail-section">
              <h3>👤 Bio</h3>
              <p className="bio-text">{member.bio}</p>
            </div>
          )}

          {/* Skills Section */}
          {member.skills && member.skills.length > 0 && (
            <div className="detail-section">
              <h3>🛠️ Skills</h3>
              <div className="skills-list">
                {member.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {member.projects && member.projects.length > 0 && (
            <div className="detail-section">
              <h3>📁 Projects</h3>
              <div className="projects-list">
                {member.projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <div className="project-header">
                      <h4>{project.name}</h4>
                      <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="project-description">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activity Timeline (simulated) */}
          <div className="detail-section">
            <h3>📊 Recent Activity</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="timeline-title">Completed Q4 Goals</p>
                  <span className="timeline-date">2 days ago</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="timeline-title">Attended Team Workshop</p>
                  <span className="timeline-date">1 week ago</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="timeline-title">Updated Profile</p>
                  <span className="timeline-date">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-btn secondary" onClick={onClose}>
            Close
          </button>
          <button className="modal-btn primary">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberDetail;
