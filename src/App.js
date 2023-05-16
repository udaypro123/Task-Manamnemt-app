
import './App.css';
import Home from './components/Home';
// import Tasklist from './components/Tasklist';

function App() {
  return (
    <>
     <div className="container">
        <div className='containerheaddiv'>Task Management App</div>
        
        <Home/>
        
        {/* <div className='Listsdiv'>

        <Tasklist/>
        </div> */}
     </div>
    </>
  );
}

export default App;
