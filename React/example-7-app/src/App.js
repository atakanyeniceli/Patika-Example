import { ThemeProvider } from './context/ThemeContext'
import { userProvider } from './context/userContext'
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <ThemeProvider>
      <userProvider>
        <Container />
      </userProvider>
    </ThemeProvider>
  );
}

export default App;
