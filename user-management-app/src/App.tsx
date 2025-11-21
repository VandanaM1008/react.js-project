import { useState, useMemo } from 'react';
import { useUsers } from './context/UserContext';
import { User } from './types/user';
import { UserFormValues } from './utils/validation';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import ConfirmDialog from './components/ConfirmDialog';
import './App.css';

function App() {
  const { users, isLoading, error, addUser, updateUser, deleteUser } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    
    const searchLower = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
    );
  }, [users, searchTerm]);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      deleteUser(userToDelete.id);
      setShowDeleteDialog(false);
      setUserToDelete(null);
    }
  };

  const handleFormSubmit = (data: UserFormValues) => {
    if (selectedUser) {
      // Edit existing user
      updateUser(selectedUser.id, data);
    } else {
      // Create new user
      addUser(data);
    }
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  if (isLoading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>User Management</h1>
          <button onClick={handleAddUser} className="btn-add">
            Add New User
          </button>
        </header>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <UserTable
          users={filteredUsers}
          onEdit={handleEditUser}
          onDelete={handleDeleteClick}
        />

        <Modal
          isOpen={showModal}
          onClose={handleCloseModal}
          title={selectedUser ? 'Edit User' : 'Create New User'}
        >
          <UserForm
            user={selectedUser}
            onSubmit={handleFormSubmit}
            onCancel={handleCloseModal}
          />
        </Modal>

        <ConfirmDialog
          isOpen={showDeleteDialog}
          title="Delete User"
          message={`Are you sure you want to delete ${userToDelete?.name}?`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteDialog(false)}
        />
      </div>
    </div>
  );
}

export default App;
