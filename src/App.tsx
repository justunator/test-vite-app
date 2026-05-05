import React, { useState } from 'react'
import "./App.css";

function Card({ title }: { title: string }) {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked!" : "Like"}
      </button>
    </div>
  );
}

function App() {
  const [stuff, setStuff] = useState<Set<string>>(new Set());
  
  return (
    <div className='App'>
      <h1>List of stuff</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newStuff = formData.get("new-stuff") as string;
        setStuff(new Set([...stuff, newStuff]));
        e.currentTarget.reset();
      }}>
        <input name="new-stuff" placeholder='Add new stuff' />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => setStuff(new Set())}>Clear stuff</button>
      {stuff.size > 0 ? Array.from(stuff).map((item) => (
        <Card title={item} />
      )) : <p>Nothing!</p>}
    </div>
  );
}

export default App;
