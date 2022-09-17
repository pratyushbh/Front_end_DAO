import './App.css';
import {Navbar,Footer,Underwork} from './Components/index';
import Error_404 from './Pages/404/404';
import Homepage from './Pages/Homepage/homepage';
import {Route, Routes} from 'react-router';
import Blog from './Components/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';
import Proposal from './Pages/Proposal/Proposal';
import Treasury from './Pages/Treasury/Treasury';
import Blog_input from './Pages/Blog_Creation/Blog_input';
import Podcast from './Components/Podcasts/Podcast';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Content/Blog" element={<><Navbar/><Blog/></>}/>
          <Route path="/Proposals" element={<Proposal/>}/>
          <Route path="/Treasury" element={<Treasury/>}/>
          <Route path="/Content/Podcast" element={<><Navbar/><Podcast/></>}/>
          <Route path="/Blog_input" element={<Blog_input/>}/>
          <Route path="*" element={<Error_404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
