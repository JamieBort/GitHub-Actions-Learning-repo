import './App.css';

let status1;
let status2;

const A_SECRET = process.env.MY_FIRST_SECRET;
const A_DIFFERENT_SECRET = process.env.github_secret;

if(A_SECRET) status1 = true;
else status1 = false;

if(A_DIFFERENT_SECRET) status2 = true;
else status2 = false;


function App() {

  // const renderSwitch =(param)=> {
  //       switch(param) {
  //         case A_SECRET:
  //           return 'MY_FIRST_SECRET';
  //         case A_DIFFERENT_SECRET:
  //           return 'github_secret';
  //         default:
  //           return 'there is no secret';
  //       }
  //     }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Adding this H1 tag to force a push.</h1>
        <p>"My FIRST SECRET" <b>{status1 ? A_SECRET : "does not exist"}</b>.</p>
        <p>"my first secret" <b>{status2 ? A_DIFFERENT_SECRET : "does not exist"}</b>.</p>
        {/* <p>{renderSwitch("foo")}</p> */}
        
      </header>
    </div>
  );
}

export default App;
