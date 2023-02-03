import { lazy, Suspense } from 'react';
import Loading from "./components/loading/Loading";

// const Home = lazy(() => import('./pages/home/Home'));

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/home/Home")), 1300);
  });
});


function App() {
  return (
    <Suspense className="App" fallback={<Loading />}>
    < Home />
  </Suspense>
  );
}

export default App;
