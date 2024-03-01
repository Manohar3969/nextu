import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { InTheatres } from './Components/InTheatres';
import { LatestReviews } from './Components/LatestReviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <InTheatres></InTheatres>
      <LatestReviews></LatestReviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
