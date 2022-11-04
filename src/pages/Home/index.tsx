import { useAuth } from 'hooks/useAuth';

const Home = () => {
  const { signOut } = useAuth();

  return (
    <>
      <h1>Logado</h1>
      <button onClick={signOut}>sair</button>
    </>
  );
}

export default Home;