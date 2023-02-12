import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/context';

import Error from './pages/Error';
import Management from './pages/Management';
import Report from './pages/Report';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Management />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
