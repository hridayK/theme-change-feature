import { useState } from 'react';
import './App.css';

function App() {

  let [isDark, setDark] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br />
        <div className="change-theme">
          <button onClick={() => {
            if(isDark){
              document.body.setAttribute("data-theme","light-theme");
              setDark(isDark=false);
            }else{
              document.body.setAttribute("data-theme","dark-theme");
              setDark(isDark=true);
            }
          }}>Change Theme</button>
        </div>
      </header>
    </div>
  );
}

export default App;
