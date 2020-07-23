import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentCard from"./Components/StudentCard"

const students=[
  {class:"green",image:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",name:"ahmed",age:22,adress:"hhhhhhhhhhh"},
  {class:"yellow",image:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",name:"mohamed",age:22,adress:"hhhhhhhhhhh"},
  {class:"red",image:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",name:"iskander",age:28,adress:"hhhhhhhhhhh"},
   
]

 const products=[
   {category:"1",price:200},
   {category:"2",price:500},
   {category:"1",price:200},
   {category:"2",price:500}, {category:"1",price:200},
   {category:"2",price:500}
   
 ]

function App() {
  return (
    <div className="App">
      
      <StudentCard  students={students} products={products}>
        <p>hello</p>
      </StudentCard>

    </div>
  );
}

export default App;
