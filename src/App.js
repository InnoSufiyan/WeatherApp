import React from 'react';
import './App.css';
import Port from './Port'
import user1 from './images/saqib.jpg'
import user2 from './images/sufiyan.jpg'
import user3 from './images/Bilal.jpg'
import post1 from './images/post1.jpg'
import post2 from './images/post2.jpg'
import post3 from './images/post3.jpg'

function App({isOpen}) {

  const [isBright, setIsBright] = React.useState(false);

  const handleChange = () => {
    setIsBright(!isBright);
  };


  return (
    <div className = {isBright ? "showcase" : "showcase2"}>
      <button onClick = {handleChange}>Change</button>
      <Port titlechange = {isBright ? "title" : "title2"} dateNTime = {isBright ? "dateNtime" : "dateNtime2"} userName = {isBright ? "userName" : "userName2"} className = {isBright ? "post" : "post2"} shares="5" likes="15" postImg = {post1} img={user1} name="Saqib Hussain" date="8/2/2021" title="School" description="Schools are Opening in Karachi"/>
      <Port shares="1" likes="10" postImg = {post2} img={user2} name="Muhammad Sufiyan" date="8/2/2021" title="Vacations" description="Going for Pakistan Tour"/>
      <Port shares="4" likes="25" postImg = {post3} img={user3} name="Bilal Rehman Khan" date="8/2/2021" title="Picnic" description="Going FarmHouse with family"/>
    </div>
  );
}

export default App;
