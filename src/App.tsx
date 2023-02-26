import React from 'react';
import MainLayout from './components/containers/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="flex justify-center items-center">
        <div className="w-full xl:w-256 px-2 sm:px-4 lg:px-8 xl:px-0 pt-20">
          <div className="flex flex-col justify-center items-center text-neutral-900 dark:text-zinc-300 transition-none">
            <h1 className="text-2xl">MeteOsthoffen</h1>
            <p className="mt-2">Work in progress...</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
