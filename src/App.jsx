import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import SingleView from './views/SingleView.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="singleView" element={<SingleView />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
