import React from 'react';

function App() {
  return (
    <div className="bg-gray-200 p-4">
      <header className="bg-blue-500 py-4">
        <h1 className="text-2xl font-medium text-white text-center">Welcome to Shaiaan's Music Website</h1>
        <nav className="flex justify-center">
          <ul className="list-none flex">
            <li className="mr-4">
              <a href="#home" className="underline text-white">Home</a>
            </li>
            <li className="mr-4">
              <a href="#tracks" className="underline text-white">Tracks</a>
            </li>
            <li className="mr-4">
              <a href="#shows" className="underline text-white">Shows</a>
            </li>
            <li className="mr-4">
              <a href="#about" className="underline text-white">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="bg-blue-500 text-center py-4">
        <h2 className="text-3xl font-medium text-white">Listen to the latest tracks from Shaiaan</h2>
        <a href="#tracks" className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white">Listen Now</a>
      </section>
      <section className="bg-orange-500 text-center py-4">
        <h2 className="text-3xl font-medium text-white">See Shaiaan live</h2>
        <a href="#shows" className="bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white">See Shows</a>
      </section>
      <section className="bg-gray-300 text-center py-4">
        <h2 className="text-3xl font-medium">Learn more about Shaiaan</h2>
        <a href="#about" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-500">Learn More</a>
      </section>
    </div>
  );
}

export default App;
