export interface UserLogin {
  email: string;
  password: string;
}

export interface CreateUserAccount {
  email: string;
  password: string;
  confirmPassword: string;
}
