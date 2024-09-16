import React from 'react';
import './Category.css'; // Importing the CSS file

const Category = () => {
  return (
    <div className="home-decor">
      <div className='containerexample'>
      <div className="header">
        <h1>Simply Unique/ <br /> Simply Better.</h1>
        <p><strong>3legant</strong> is a gift & decorations store based in HCMC, <br />Vietnam. Est since 2019.</p>
      </div>

      <div className="categories">
        <div className="category">
          <div className='category-text'>
          <h2>Living Room</h2>
          <a href="/shope">Shop Now →</a>
          </div>
          <img src="./images/levingroom.png" alt="Living Room" />
        </div>

        <div className="category">
          <div className='category-content'>
            <div className='category-text widthfix'>
          <h2>Bedroom</h2>
          <a href="/shope">Shop Now →</a>
          </div>
          <img src="./images/bedroom.png" alt="Bedroom" />
          </div>
          <div className='category-content'>
          <div className='category-text widthfix'>
          <h2>Kitchen</h2>
          <a href="/shope">Shop Now →</a>
          </div>
          <img src="./images/kitchen.png" alt="Kitchen" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Category;
