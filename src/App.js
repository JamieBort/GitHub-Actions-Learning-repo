import './App.css';

let status1;
let status2;

const A_SECRET = process.env.REACT_APP_MY_FIRST_SECRET;
const A_DIFFERENT_SECRET = process.env.REACT_APP_super_secret;

if(A_SECRET) status1 = true;
else status1 = false;

if(A_DIFFERENT_SECRET) status2 = true;
else status2 = false;


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Main branch</h1>
      <p>Moved the location of env.</p>
        <p>"My FIRST SECRET" <b>{status1 ? A_SECRET : "does not exist"}</b>.</p>
        <p>"my first secret" <b>{status2 ? A_DIFFERENT_SECRET : "does not exist"}</b>.</p>
      </header>
    </div>
  );
}

export default App;
