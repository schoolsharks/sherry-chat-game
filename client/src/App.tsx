import React from 'react';
import "./App.css";
import { Routes,
   Route,
   Navigate
   } from 'react-router-dom';
import UserMain from './pages/user/UserMain';

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <Routes>
        <Route path="/user/*" element={<UserMain/>}/>
        <Route path="/admin/*"/>
        <Route path="*" element={<Navigate to="/user"/>}/>
      </Routes>
    </div>
  );
};

export default App;