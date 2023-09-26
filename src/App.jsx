
import './App.css';
import left_side from './images/left_side.SVG';
import right_side from './images/right_side.SVG';
import Event from './components/Event';

export default function App() {
  return (
    <div className='App'>
      <h1 id='main-header'>
        <img src={left_side} id='left_side'/>
        Miami Events
        <img src={right_side} id='right_side'/>
      </h1>
      <Event/>
    </div>
  );
}
