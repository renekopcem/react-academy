import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

// Reusable submit button using useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn-primary" disabled={pending}>
      {pending ? 'Adding...' : 'Add Member'}
    </button>
  );
}

function AddMemberForm({ onAddMember }) {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const name = formData.get('name')?.trim();
      const role = formData.get('role')?.trim();

      // Validation
      if (!name) {
        return 'Name is required';
      }
      if (!role) {
        return 'Role is required';
      }

      // Simulate API delay
      await new Promise(resolve => window.setTimeout(resolve, 800));

      // Simulate random error (10% chance) for demo purposes
      if (Math.random() < 0.1) {
        return 'Server error: Please try again';
      }

      // Add the member
      onAddMember({
        id: Date.now(),
        name,
        role,
      });

      return null; // Success - no error
    },
    null
  );

  return (
    <div className="add-member-form">
      <h3>Add New Team Member</h3>
      <form action={submitAction}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              disabled={isPending}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="Enter role"
              disabled={isPending}
            />
          </div>
          <div className="form-group form-actions">
            <SubmitButton />
          </div>
        </div>
        {error && (
          <div className="form-error">
            <span className="error-icon">!</span>
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default AddMemberForm;
