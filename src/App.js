import './App.css';
import ControlledCarousel from './components/hero';
import Video from './components/video';
import YouTubeEmbed from './components/youtube';
import Company from './components/company';

function App() {
  return (
    <div className="App">
      <ControlledCarousel/>
      <Video/>
      <YouTubeEmbed/>
      <Company/>
    </div>
  );
}

export default App;
