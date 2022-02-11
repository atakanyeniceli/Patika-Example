import Users from './Components/Users'
import User from './Components/User'
import NotFound from './Components/NotFound'
import { Routes, Route, Link, useParams } from "react-router-dom";


function App() {
  return (
    <Main></Main>
  );
}
function Main() {
  return (
    <div>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/:aboutId" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <ul>
          <li>
            <Link to="/about/0">About</Link>
          </li>
          <li>
            <Link to="/about/1">About 1</Link>
          </li>
          <li>
            <Link to="/about/2">About 2</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function About() {
  const params = useParams();
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>About Id ={params.aboutId}</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
