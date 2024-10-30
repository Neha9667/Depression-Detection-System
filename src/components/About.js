import React from 'react'
import './about.css';

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 class="heading"><span>About </span>Us</h1>
        <div className="row">
        <div className="image">
          <img src="./aboutPageImg.jpg" alt="" height="800px"></img>
        </div>
        <div className="content">
          <h3>We take care of your healthy life</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend facilisis varius. Pellentesque aliquet ullamcorper viverra. Aenean euismod vulputate sem, lacinia pellentesque libero ullamcorper eu. Proin a ornare magna. Mauris sit amet velit efficitur, placerat dolor in, dictum nunc. Pellentesque sed rhoncus eros, ut accumsan nulla. Aenean viverra massa lacus, et gravida massa congue ac. Maecenas augue velit, condimentum non purus ut, tempus tincidunt dui. Ut sagittis, quam ac convallis cursus, arcu lacus condimentum nisl, eu laoreet augue orci in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis accumsan sed erat vel iaculis.
          </p>
          <p>Proin vehicula eu lectus et tempus. Maecenas nisl sapien, cursus sed sapien non, eleifend posuere lacus. Vivamus posuere interdum faucibus. Integer posuere ligula nunc, laoreet auctor massa pellentesque eu. Fusce dui metus, condimentum ut enim nec, sagittis blandit mi. Cras blandit massa nisi, id euismod nunc gravida id. Etiam quis commodo mi.</p>
          <a href="#" className="btn">learn more</a>
        </div>
        </div>
      </div>


    </div>
  )
}

export default About
