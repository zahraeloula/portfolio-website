import angular from "../assets/img/OIP.png";
import meter2 from "../assets/img/react.png";
import meter3 from "../assets/img/spring.png";
import Symfony from "../assets/img/symfony.png";
import Java from "../assets/img/java.png";
import net from "../assets/img/net.png";
import R from "../assets/img/R.png";
import dock from "../assets/img/dock.png";
import jen from "../assets/img/jen.png";
import sql from "../assets/img/sql.png";
import mon from "../assets/img/mon.png";
import git from "../assets/img/git.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> I specialize in a variety of programming languages and frameworks, with a focus on creating scalable, efficient, and user-friendly applications.<br></br>  Some of the technologies I am skilled in include:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={angular} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>React</h5>
                            </div>


                            <div className="item">
                     <img src={net} alt="Image"     style={{
                     width: '35%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) translateY(25px)',  // Scale the image and move it 10px down
                     transition: 'transform 0.3s ease'  // Smooth transition
                     }}  />
                   <h5 style={{ marginTop: '50px' }}>.Net</h5> {/* Move the text down */}
                     </div>  
                             

                            <div className="item">
                <img  src={meter3}  alt="Spring Boot"
                     style={{
                     width: '75%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) translateY(15px)',  // Scale the image and move it 10px down
                     transition: 'transform 0.3s ease'  // Smooth transition
                        }} 
  />
   <h5 style={{ marginTop: '35px' }}>Spring Boot</h5> {/* Move the text down */}
</div>

                     <div className="item">
                     <img src={Symfony} alt="Image"     style={{
                     width: '50%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) translateY(20px)',  // Scale the image and move it 10px down
                     transition: 'transform 0.3s ease'  // Smooth transition
                     }}  />
                     <h5 style={{ marginTop: '40px' }}>Symfony</h5> {/* Move the text down */}
                     </div>   


                     <div className="item">
                     <img src={Java} alt="Image"     style={{
                     width: '80%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) ',  // Scale the image and move it 10px down
                     transition: 'transform 0.3s ease'  // Smooth transition
                     }}  />
                     <h5 >Java</h5> {/* Move the text down */}
                     </div>  

                   
                     <div className="item">
                     <img src={R} alt="Image"     style={{
                     width: '35%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) translateY(25px)',  // Scale the image and move it 10px down
                     transition: 'transform 0.3s ease'  // Smooth transition
                     }}  />
                   <h5 style={{ marginTop: '50px' }}>Python</h5> {/* Move the text down */}
                     </div> 

                     <div className="item">
                     <img src={dock} alt="Image"     style={{
                     width: '50%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) ',  // Scale the image and move it 10px down
                     transition: 'transform 0.3s ease'  // Smooth transition
                     }}  />
                   <h5 >Docker</h5> {/* Move the text down */}
                     </div> 

                     <div className="item">
                     <img src={jen} alt="Image"     style={{
                     width: '70%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) translateY(25px)',  // Scale the image and move it 10px down
                     transition: 'transform 1s ease'  // Smooth transition
                     }}  />
  <h5 style={{ marginTop: '40px' }}>Jenkins</h5> {/* Move the text down */}                     </div> 



  <div className="item">
                     <img src={sql} alt="Image"     style={{
                     width: '40%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) translateY(20px)',  // Scale the image and move it 10px down
                     transition: 'transform 1s ease'  // Smooth transition
                     }}  />
  <h5 style={{ marginTop: '40px' }}>MySQL</h5> {/* Move the text down */}                     </div> 



  <div className="item">
                     <img src={mon} alt="Image"     style={{
                     width: '45%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) translateY(35px)',  // Scale the image and move it 10px down
                     transition: 'transform 1s ease'  // Smooth transition
                     }}  />
  <h5 style={{ marginTop: '50px' }}>Mongo DB</h5> {/* Move the text down */}                     </div> 



  <div className="item">
                     <img src={git} alt="Image"     style={{
                     width: '50%',  // Enlarge the image by 20%
                     height: 'auto',  // Maintain the aspect ratio
                     transform: 'scale(1.2) translateY(40px)',  // Scale the image and move it 10px down
                     transition: 'transform 1s ease'  // Smooth transition
                     }}  />
  <h5 style={{ marginTop: '75px' }}>Github</h5> {/* Move the text down */}                     </div> 





                         
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
