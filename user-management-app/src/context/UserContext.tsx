import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserFormData } from '../types/user';

interface UserContextType {
  users: User[];
  isLoading: boolean;
  error: string | null;
  addUser: (userData: UserFormData) => void;
  updateUser: (id: number, userData: UserFormData) => void;
  deleteUser: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Failed to load users. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const addUser = (userData: UserFormData) => {
    // Create new user object with a temporary ID
    const newUser: User = {
      id: Date.now(), // simple way to generate unique ID
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      company: {
        name: userData.companyName,
      },
    };
    setUsers([newUser, ...users]); // add to beginning of list
  };

  const updateUser = (id: number, userData: UserFormData) => {
    setUsers(users.map(user => 
      user.id === id
        ? {
            ...user,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            company: { name: userData.companyName },
          }
        : user
    ));
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        isLoading,
        error,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the context
export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within UserProvider');
  }
  return context;
};
