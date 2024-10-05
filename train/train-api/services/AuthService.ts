import { AuthResponse, Service } from '../types.js';

class AuthService  implements Service{
  async login({ username, password }: { username: string; password: string }): Promise<AuthResponse> {
    if (username === 'user' && password === 'pass') {
      return { token: 'fake-jwt-token' };
    }
    throw new Error('Invalid credentials');
  }
}

export default AuthService;