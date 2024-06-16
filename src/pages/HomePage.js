import React from 'react';
import Header from '../Header';
import Search from '../Search';
import Body from '../Body';
import MonthlyStats from '../MonthlyStats';
function HomePage() {
  return (
    <div>
        <Header/>
        <MonthlyStats/>
        <Search/>
        <Body/>
    </div>
  );
};

export default HomePage;
