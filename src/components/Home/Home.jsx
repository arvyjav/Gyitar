import React from 'react'
import './Home.css';
import 'boxicons';

const Home = () => {
    return (
        <section className="sec">
        <div className="content">
            <div className="textBox">
                <h2> Hans <span>Not Hans</span> </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <a href="#">Learn Guitar</a>
            </div>
            <div className="imgBox">
              <img src="http://www.pngall.com/wp-content/uploads/2016/06/Acoustic-Guitar-Free-PNG-Image.png" className="guitar" width="300px"/>
            
            </div>
        </div>
        <ul className="sci">
            <li><a href="#"><i class='bx bxl-instagram'></i></a></li>
            <li><a href="#"><i class='bx bxl-twitter'></i></a></li>
            <li><a href="#"><i class='bx bxl-facebook'></i></a></li>
        </ul>
        </section>
    )
}

export default Home


