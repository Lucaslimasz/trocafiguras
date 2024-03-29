import { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from "react-router-dom";

import { FieldValues, SubmitHandler } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { firebase } from '../config/firebase';

import { toast } from 'react-toastify';

interface IUser {
  token: string;
  name: string;
  CEP: string | null;
  email: string | null;
}

interface IAuthProvider {
  isLoading: boolean;
  signIn: (itens: any) => void;
  registerAuth: (itens: any) => void;
  isLogged: boolean;
  user: IUser | null;
  signOut: () => void;
  auth: any;
}

export const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);

export const AuthProvider = ({ children }: any) => {
  const auth: any = getAuth(firebase);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      const sessionToken = sessionStorage.getItem('@auth/id');
      const sessionName = sessionStorage.getItem('@auth/name');
      const sessionCEP = sessionStorage.getItem('@auth/CEP');
      const sessionEmail = sessionStorage.getItem('@auth/email');

      if (sessionToken && sessionName) {
        setIsLogged(true)
        setUser({
          token: sessionToken,
          name: sessionName,
          CEP: sessionCEP,
          email: sessionEmail
        })
      }
    })()
  }, [])


  const signIn: SubmitHandler<FieldValues> = async (itens) => {
    const { email, password } = itens;
    setIsLoading((true))

    signInWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        setIsLogged(true)
        sessionStorage.setItem('@auth/id', JSON.stringify(res.user.accessToken));
        sessionStorage.setItem('@auth/name', JSON.stringify(res.user.displayName.split('/')[0]));
        sessionStorage.setItem('@auth/CEP', JSON.stringify(res.user.displayName.split('/')[1]));
        sessionStorage.setItem('@auth/email', JSON.stringify(res.user.email));
        navigate('/home')
      }).catch((err) => {
        toast.error('Usuário ou Senha Invalido')
        console.log(err)
      }).finally(() => {
        setIsLoading(false)
      })
  }

  const registerAuth: SubmitHandler<FieldValues> = async (itens) => {
    const { email, password, confirm_password, name, CEP } = itens
    setIsLoading(true)

    if (password === confirm_password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res: any) => {
          setIsLogged(true)
          sessionStorage.setItem('@auth/id', JSON.stringify(res.user.accessToken));
          sessionStorage.setItem('@auth/name', name);
          sessionStorage.setItem('@auth/CEP', JSON.stringify(CEP));
          sessionStorage.setItem('@auth/email', JSON.stringify(email));
          navigate('/home')
          updateProfile(auth.currentUser, { displayName: `${name}/${CEP}` })
            .then(() => {
              console.log('updated user!')
            })
            .catch((err: any) => console.log(err))
        }).catch((err) => {
          const message = err.toString().split('/')[1]?.split('-').toString().replaceAll(',', ' ').replaceAll(')', '');
          toast.error(message)
        }).finally(() => {
          setIsLoading(false)
        })
    } else {
      return toast.error('As senhas devem ser iguais.')
    }
  }

  const signOut = () => {
    sessionStorage.clear()
    setUser(null)
    window.location.reload();
  }

  return (
    <AuthContext.Provider value={{ isLoading, signIn, registerAuth, isLogged, user, signOut, auth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  return ctx
}