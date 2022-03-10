import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css';
import image1 from './assets/image1.webp';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.webp';
import image4 from './assets/image4.webp';
import image5 from './assets/image4.webp';

function Landing() {
    return (
        <div className={s.grid}>
            <div className={s.images}>
                {/* <div>hola</div> */}
                <img src={image1} alt='img not found' className={s.img}/>
                <img src={image2} alt='img not found' className={s.img}/>
                <img src={image3} alt='img not found' className={s.img}/>
                <img src={image4} alt='img not found' className={s.img}/>
                {/* <img src={image5} alt='img not found' className={s.img}/> */}
            </div>
            <div className={s.right}>
                <div>
                    <h2>Spoonacular</h2>
                    <div>The best international recipes</div>
                    <Link to = '/home' style={{ textDecoration: 'none' }}>
                        <button className={s.btn}>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
        
                
        
        
    );
}

export default Landing;