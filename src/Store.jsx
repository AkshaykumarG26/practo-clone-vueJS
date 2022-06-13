
        
        <section className="home-practo-app">
            <div className="home-practo-app-background"></div>
            <div className="home-practo-app-content">
                <div className="home-practo-app-image-container">
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="practo-app" />
                </div>
                <div className="home-practo-app-info-container">
                    <h2>Download the Practo app</h2>
                    <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                    <p>Get the link to download the app</p>
                    <div className="home-practo-app-input">
                        <InputGroup className="home-practo-app-inputGroup" size="lg">
                            <InputLeftAddon children="+91" style={{ fontSize: "14px", fontWeight: 500, backgroundColor: "transparent" }} />
                            <Input type="tel" placeholder="Enter phone number" style={{ fontSize: "14px" }} />
                        </InputGroup>
                        <button className="button button-primary">Send SMS</button>
                    </div>
                    <div className="home-store-buttons-container">
                        <button className="button button-store"><img src={process.env.PUBLIC_URL + './images/home-google-play.svg'} alt="google-play" />Google Play</button>
                        <button className="button button-store"><img src={process.env.PUBLIC_URL + './images/home-apple-logo.svg'} alt="google-play" />Apple Store</button>
                    </div>
                </div>
            </div>

        </section>







<div class="user-reviews-carousel-container">
      <h2>What our users have to say</h2>
      
        <div class="user-review-item">
          <p>
            Very helpful. Far easier than doing same things on computer. Allows
            quick and easy search with speedy booking. Even maintains history of
            doctors visited.
          </p>
          <div>
            <span
              ><img src={process.env.PUBLIC_URL + './images/home_user.svg'}
              alt="" width="16px" /></span
            >Amit Sharma
          </div>
        </div>
        <div class="user-review-item">
          <p>
            Very easy to book,maintain history. Hassle free from older versions
            of booking appointment via telephone.. Thanks Practo for making it
            simple.
          </p>
          <div>
            <span
              ><img src={process.env.PUBLIC_URL + './images/home_user.svg'}
              alt="" width="16px" /></span
            >Jyothi Bhatia
          </div>
        </div>
        <div class="user-review-item">
          <p>
            Very good app. Well thought out about booking/rescheduling/canceling
            an appointment. Also, Doctor's feedback mechanism is good and
            describes all the basics in a good way
          </p>
          <div>
            <span
              ><img src={process.env.PUBLIC_URL + './images/home_user.svg'}
              alt="" width="16px" /></span
            >Avinash Kumar
          </div>
        </div>
      
    </div>
