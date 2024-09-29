import React from 'react';

function Signin ()  {
  return (

<div className='flex w-[100%] items-center justify-center mt-32'>

<div className='flex flex-col w-[50vh] h-[50vh] bg-[gray] items-center justify-around'>
<div className="box">
      <div className="contener">
      <div className="contener2">
        <p className="welcome font-bold text-4xl">Sign up</p>
       </div>
       </div>
       </div>
       <label className="name">Username</label>
       <input className="username" id="username" type="text" />

     <label className="name emai-text">Password:</label>
      <input className="pass" id="password" type="password" />

      <label className="name">Email:</label>
         <input className="username" id="email" type="email" />

       <div className="container mt-3 flex items-center justify-center">
           <button id="btn" className="btn ">
              <a href="page3.html" className="textbtn">SIGN UP</a>
       </button>
</div>
</div>

</div>

  );
};

export default Signin;
