import React, { useState, useEffect } from 'react';
import './Card.css';
function Card() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {userData && <UserProfileCard user={userData} />}
      </header>
    </div>
  );
}

const UserProfileCard = ({ user }) => {
  return (
    <>
    {/* <div className="card">
      <img src={user.picture.large} alt="User" className="card-image" />
      <div className="card-body">
        <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
        <p>{`${user.gender}, ${user.dob.age} years old`}</p>
        <p>{`${user.location.city}, ${user.location.country}`}</p>
        <p>{`${user.email}`}</p>
        <p>{`Phone: ${user.phone}`}</p>
        <p>{`Cell: ${user.cell}`}</p>
      </div>
    </div> */}

    <div className='card'>
        <div className='img-div'>
        <img src={user.picture.large} alt="User" className="card-image" />
        </div>
        <div className='discript-div'>
        <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
        <p>{`${user.gender}`}</p>
        <p>{`Phone: ${user.phone}`}</p>
        </div>
    </div>
    </>
  );
};

export default Card;
