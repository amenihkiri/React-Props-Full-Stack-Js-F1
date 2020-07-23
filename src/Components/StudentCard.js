import React from 'react'

function StudentCard(props) {
    return (
        <>
        <h1>titre</h1>
<div className="student-list">
{props.students.map(student =>
     <div className={student.class}>
   <img width="100px" src={student.image}/>
    <h1>{student.name}</h1>
    <h2>{student.age}</h2>
    <p>{student.adress}</p>
  

    </div>
    )}
</div>
<ul>
{props.products.map(product =>
    <li>{product.price}</li>)}
</ul>
  </>  )
}
     


export default StudentCard


















 //     <section className="student-list">
    //     <div className="student-card">
    //         <img width="100px"src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"/>
    //         <h1>mohamed</h1>
    //         <h2>22 ans</h2>
    //         <p>lac1-gomycode</p>
    //     </div >
    //       <div className="student-card">
    //       <img  width="100px" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"/>
    //       <h1>mohamed</h1>
    //       <h2>22 ans</h2>
    //       <p>lac1-gomycode</p>
    //   </div>
    //   <div className="student-card">
    //       <img  width="100px" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"/>
    //       <h1>mohamed</h1>
    //       <h2>22 ans</h2>
    //       <p>lac1-gomycode</p>
    //   </div>
    //   </section>