// User type based on JSONPlaceholder API response
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  username?: string;
  address?: any;
  website?: string;
}

// Form data type for creating/editing users
export interface UserFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
}
