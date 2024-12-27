import { useNavigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import { IUser } from '../types/user';
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';
import { api } from '../config/axios';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({} as IUser);

  const handleLogin = async (loginData: ILoginData) => {
    try {
      
      const { data } = await api.get(`/users?email=${loginData.email}`);

      
      if (data.length === 1) {
        
        const user = data[0];
        if (user.password === loginData.password) {
          setUser(user);  
          navigate('/feed');  
        } else {
          alert('Senha incorreta');  
        }
      } else {
        alert('E-mail não encontrado');  
      }
    } catch (error: any) {
      console.error('Erro na requisição:', error);
      alert('Houve um erro, tente novamente');
    }
  };

  const handleSignOut = () =>{
    setUser({} as IUser);
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
