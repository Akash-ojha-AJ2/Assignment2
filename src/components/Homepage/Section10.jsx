import React from 'react';
import './Section10.css';


import blogImg1 from '../../assets/Section10Image01.png';
import blogImg2 from '../../assets/Section10Image02.jpg';
import blogImg3 from '../../assets/Section10Image03.jpg';

function Section10() {
  const blogs = [
    {
      id: 1,
      image: blogImg1,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM"
    },
    {
      id: 2,
      image: blogImg2,
      title: "Postcard Marketing: The Definitive Guide to High ROI [2022]"
    },
    {
      id: 3,
      image: blogImg3,
      title: "The Ultimate Guide to Thank You Notes for Ecommerce"
    }
  ];

  return (
    <section className="pp-insights-section">
      <div className="pp-insights-container">
        
        <h2 className="pp-insights-header">
          Latest trends & <span>insights</span>
        </h2>

        <div className="pp-insights-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="pp-insight-card">
              <div className="pp-insight-img-wrapper">
                <img src={blog.image} alt={blog.title} />
              </div>
              <h3>{blog.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Section10;