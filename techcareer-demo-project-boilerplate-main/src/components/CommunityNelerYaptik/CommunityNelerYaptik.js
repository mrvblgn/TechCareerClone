import React from 'react'
import './communityNelerYaptik.css'
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';

function CommunityNelerYaptik() {
    const data = [
        {
          image: img1,
          count: "170+",
          text: "Topluluğumuz Bulunmakta",
        },
        {
          image: img2,
          count: "100+",
          text: "Etkinlik Gerçekleştirdik",
        },
        {
          image: img3,
          count: "455+",
          text: "Eğitim Gerçekleştirdik",
        },
        {
          image: img4,
          count: "100+",
          text: "Üniversiteye Ulaştık",
        },
        {
          image: img5,
          count: "80+",
          text: "Sponsorluk Gerçekleştirdik",
        },
      ];

  return (
    <section className='communityNelerYaptikContainer'>
        <h1 className='nelerYaptikTitle'>Bugüne Kadar Neler Yaptık?</h1>
        <div className='cardsContainer'>
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.image} alt={item.text} className="cardImage" />
                    <h3 className="cardCount">{item.count}</h3>
                    <p className="cardText">{item.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default CommunityNelerYaptik