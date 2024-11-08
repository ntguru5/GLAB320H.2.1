import './App.css';

function Header() {
  return (<h1>Ken's Simple React Application</h1>);
}

function Content() {
  return (<p>This is my Per Scholas lab</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}
function App() {
  return (
    <>
    <Header />
    <Content />
    <Footer />
    </>
  );
}

export default App;
