import { puppyList } from './data.js'
import { useState } from 'react'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  // Find the featured puppy based on featPupId
  const featuredPup = puppies.find(puppy => puppy.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App 