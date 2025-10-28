import "./About.css";

function About() {
    return(
        <>
         <section className="about-section">
      {/* First Card */}
      <div className="about-card" id="aboutus"> 
            <div className="about-img">
                <img src="./img10.jpg" alt="Coffee Story" ></img>
            </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At Jonas, every cup tells a story. We source our beans from
            the finest farms and roast them to perfection to give you that rich,
            aromatic experience in every sip.
          </p>
        </div>

      </div>

      {/* Second Card */}
      <div className="about-card reverse">
        <div className="about-img">
          <img src="./img12.jpg" alt="Our Passion" />
        </div>
        <div className="about-text">
          <h2>Our Passion</h2>
          <p>
            We believe coffee is more than a drink — it’s an art form. From
            roasting to pouring, every detail matters to us, ensuring the
            perfect brew for our customers every day.
          </p>
        </div>
      </div>

              {/* First Card */}
      <div className="about-card"> 
            <div className="about-img">
                <img src="./img18.jpg" alt="Coffee Story" ></img>
            </div>
        <div className="about-text">
          <h2>The Taste of Joy, Shared with Every Smile</h2>
          <p>
           From our kitchen to your heart, every pastry is made with care and love.
           Because happiness is even sweeter when shared — one bag, one smile at a time.
          </p>
        </div>

      </div>


    </section>
        
        
        </>
    )

}

export default About