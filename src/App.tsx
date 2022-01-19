import { Routes, Route } from 'react-router-dom';
import ShowList from './components/show/ShowList';
import ShowDetails from './components/show/ShowDetails';
import PageNotFound from './pages/PageNotFound';

import './App.scss';

const App = () => {

  return (
    <div className="App">
      <div className="pages-container">
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:ID" element={<ShowDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>

  );
}
export default App;
