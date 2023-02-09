import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from './pages/Error';
import Management from './pages/Management';
import Report from './pages/Report';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Management />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
