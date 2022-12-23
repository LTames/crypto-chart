import React from 'react';
import TopCoins from './TopCoins';
import Loading from '../Helper/Loading';

const MainChart = React.lazy(() => import('./MainChart'));

function Home() {
  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <MainChart />
      </React.Suspense>
      <TopCoins />
    </div>
  );
}

export default Home;
