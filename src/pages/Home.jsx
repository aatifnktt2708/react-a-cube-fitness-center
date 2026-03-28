import React from "react";

const Home = () => {
  return (
    <>
    <nav id="navbar">
        <div id="logo">
            <img src="assets/resources/logo.png" alt="logo" />
        </div>

        <ul>
            <li className="item"><a href="#">Home</a></li>
            <li className="item"><a href="about_us.html" target="_blank">About Us</a></li>
            <li className="item"><a href="workout_plan.html" target="_blank">Workout Plan</a></li>
            <li className="item"><a href="#facilities">Our Facilities</a></li>
            <li className="item"><a href="membership.html" target="_blank">Membership</a></li>
            <li className="item"><a href="join_now.html" target="_blank">Join Now</a></li>

        </ul>
    </nav>

    <section id="home">
        <h1 className="h-primary">A Cube Fitness Center</h1>
        <p>The Best GYM in Mumbai</p>
        <button className="btn"><a href="join_now.html" target="_blank">Join Now</a></button>
    </section>

    <section className="facilities-container">
        <h1 className="h-primary center">Our Facilities</h1>
        <div id="facilities">
            <div className="box">
                <img src="assets/resources/facility/cupping.png" alt="" />
                <h2 className="h-secondary center">Cupping</h2>
                <p className="center">
                    Cupping is a method of negative pressure therapeutic bodywork that
                    utilizes silicone, plastic, or glass cups applied to the body, to
                    relieve muscular tension and pain. Cups on the body create a pulling
                    action, or “vacuum”, to the tissue it is applied to, which allows
                    for fascia hydration, tissue congestion clearing, and improved
                    circulation. Tissue congestion and pain can severely limit our range
                    of motion and cause pain throughout our body, and cups are often
                    used to relieve this discomfort for a wide variety of
                    musculoskeletal conditions.
                </p>
            </div>
            <div className="box">
                <img src="assets/resources/facility/ice_bath.png" alt="" />
                <h2 className="h-secondary center">Ice Bath</h2>
                <p className="center">
                    Ice baths reduce inflammation and improve recovery by changing the
                    way blood and other fluids flow through your body. When you sit in
                    cold water, your blood vessels constrict; when you get out, they
                    dilate (or open back up). This process helps flush away metabolic
                    waste post-workout, says Clayton. That's especially true with lymph,
                    a clear fluid made up of white blood cells and fluid from your
                    intestines, he explains.While your heart constantly moves blood
                    around your body, your lymph nodes don't have a pump. Ice baths
                    constrict and open vessels manually, which helps stagnant fluids in
                    your lymph nodes move throughout your body. Increased blood flow
                    also floods your cells with nutrients and oxygen to theoretically
                    help your body recover, adds Clayton.
                </p>
            </div>
            <div className="box">
                <img src="assets/resources/facility/sauna.png" alt="" />
                <h2 className="h-secondary center">Sauna</h2>
                <p className="center">
                    If you're an athlete or fitness enthusiast, you know that recovery
                    is just as important as training. After a workout, your muscles need
                    time to recover and repair themselves, especially if you're training
                    multiple times per week. While rest and nutrition are crucial for
                    this process, there's another tool gaining wide popularity among
                    athletes: saunas.Saunas have been used for centuries for their
                    health benefits, and recent scientific studies have shown that the
                    benefits of a sauna after a workout can be particularly effective
                    for recovery. In this article, we'll explore the benefits of sauna
                    after workout sessions, and provide some simple tips for
                    incorporating sauna into your post-workout routine.
                </p>
            </div>
            <div className="box">
                <img src="assets/resources/facility/fully_ac.png" alt="" />
                <h2 className="h-secondary center">Fully Air-Conditioned</h2>
                <p className="center">
                    An air-conditioned gym provides a controlled environment where the temperature is set to a comfortable level. According to Karnal-based certified trainer Jayant Jawa, "Working in an AC gym ensures optimal comfort, improving your overall workout experience." It's a scorching summer day, and you're trying to get some work done and suddenly your office runs out of electricity. The heat is unbearable, making it difficult to concentrate and hampering your productivity. Now, apply that scenario to your workout routine. As summer arrives, the decision to exercise in an air-conditioned gym or endure the heat outdoors becomes a common dilemma.
                </p>
            </div>
        </div>
    </section>
    <footer>
        <section className="footer-container">
            <div className="footer">
                <div className="links">
                    <table>
                        <thead>
                            <tr>
                                <td><a className="oth" href="#">Links</a></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#">A Cube App</a></td>
                                <td><a href="#">FAQs</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">Exercise Library</a></td>
                                <td><a href="#">Equipment</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">A Cube Clinic</a></td>
                                <td><a href="about_us.html">About</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">Terms & Conditions</a></td>
                                <td><a href="#">Contact</a></td>
                            </tr>
                            <tr>
                                <td><a href="#">Privacy Policy</a></td>
                                <td><a href="#">Body Map</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="form">
                    <form>
                        <ul>
                            <li className="form-row">
                                <input type="text" id="name" placeholder="Name" required />
                            </li>
                            <li className="form-row">
                                <input type="email" id="email" placeholder="Email" required />
                            </li>
                            <li className="form-row">
                                <textarea name="message" id="" placeholder="Enter your Message..." cols="30" rows="10"></textarea>
                            </li>
                            <li className="form-row">
                                <button type="submit">Submit Now</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </section>
        <hr />
        <p className="center copyright">
            &copy; Copyright A Cube Fitness Center LLC 2024 | All Rights Reserved
        </p>
    </footer>



    </>
  )
}

export default Home;