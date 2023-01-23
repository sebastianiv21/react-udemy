import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext, { AuthContextProvider } from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </AuthContextProvider>
  );
}

export default App;
