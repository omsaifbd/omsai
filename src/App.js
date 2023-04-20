
import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './Component/AllRoutes'

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
