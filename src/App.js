import './App.css';
import video from './pexels-rostislav-uzunov-7513671 (1).mp4';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Additional from './components/Additional/Additional';
import MoreInfo from './components/MoreInfo/MoreInfo';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

function App() {
  return (
    <div>
      <Navigation />
      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>Away</h1>
        <h2>Find your ocean</h2>
        <a href='#additional'>
          <BsFillArrowDownCircleFill className='arrow' />
        </a>
      </div>
      <Content />
      <Additional />
      <MoreInfo />
    </div>
  );
}

export default App;
