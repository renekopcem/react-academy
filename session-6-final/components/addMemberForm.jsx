import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function AddMemberForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('Engineering');

  const queryClient = useQueryClient();

  // useMutation for adding a new team member
  const addMemberMutation = useMutation({
    mutationFn: async (newMember) => {
      console.log('➕ Adding new member:', newMember);
      const response = await fetch('/api/team-members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMember),
      });

      if (!response.ok) {
        throw new Error('Failed to add team member');
      }

      return response.json();
    },
    onSuccess: (data) => {
      console.log('✅ Member added successfully:', data);
      // Invalidate and refetch team members query
      queryClient.invalidateQueries({ queryKey: ['team-members'] });
      // Clear form
      setName('');
      setRole('');
      setEmail('');
      setDepartment('Engineering');
    },
    onError: (error) => {
      console.error('❌ Error adding member:', error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !role || !email) {
      alert('Please fill in all fields');
      return;
    }

    addMemberMutation.mutate({
      name,
      role,
      email,
      department,
    });
  };

  return (
    <div className="add-member-form-container">
      <h3>Add New Team Member</h3>
      <form onSubmit={handleSubmit} className="add-member-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={addMemberMutation.isPending}
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={addMemberMutation.isPending}
          />
        </div>

        <div className="form-row">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={addMemberMutation.isPending}
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            disabled={addMemberMutation.isPending}
          >
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={addMemberMutation.isPending}
        >
          {addMemberMutation.isPending ? '➕ Adding...' : '➕ Add Member'}
        </button>

        {addMemberMutation.isError && (
          <div className="form-error">
            Error: {addMemberMutation.error.message}
          </div>
        )}

        {addMemberMutation.isSuccess && (
          <div className="form-success">
            Member added successfully!
          </div>
        )}
      </form>
    </div>
  );
}

export default AddMemberForm;
