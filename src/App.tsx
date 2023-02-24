import React from 'react';
import MainLayout from './components/containers/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center pt-12 text-neutral-900 dark:text-zinc-300">
        <h1 className="text-2xl">MeteOsthoffen</h1>
        <p className="mt-2">Work in progress...</p>
      </div>
    </MainLayout>
  );
}

export default App;
