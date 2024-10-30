import React from 'react';
import './homepage.css';
import Footer from './Footer';



// const Homepage = () => {
//     return (
//         <div className='main'>
//             <div className='submain'>
//             <div className='home'>
//                 <p>"You don't have to see the whole staircase, <br></br>just take the first step." </p>
//             </div><br></br><br></br>
//             <div className='imgdiv'>
//                 <img src='https://static.vecteezy.com/system/resources/previews/002/613/142/original/woman-meditating-in-nature-and-leaves-concept-for-yoga-meditation-relax-healthy-lifestyle-vector.jpg'></img>
//                 <button className='button'>Take Test</button>


//             </div>

//             </div>
               
           
            



    



            
//         </div>
//     );
// };

// export default Homepage;


const Homepage = () => {
    return (
      <>
      <div className='main'>
        <div className='submain'>
          {/* Quote Section */}
          <div className='home'>
            <p className="quote">
              "You don't have to see the whole staircase, <br />just take the first step."
            </p>
          </div>
          <br /><br />
          
          {/* Image Section */}
          <div className='imgdiv'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/002/613/142/original/woman-meditating-in-nature-and-leaves-concept-for-yoga-meditation-relax-healthy-lifestyle-vector.jpg'
              alt='Meditation'
            />
            <button className='button'>Take Test</button>
          </div>
        </div>
        
      </div>
      <Footer/>
      </>
    );
  };
  
  export default Homepage;