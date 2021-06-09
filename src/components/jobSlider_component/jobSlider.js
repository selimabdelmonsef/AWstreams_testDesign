import React, { Component } from "react";
import Slider from "react-slick";
import styles from './jobSlider.module.css';
import { featured_jobs } from '../../constants/featured_jobs_constant';


export default class FeatureJobSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={styles.jobSliderContent}>
        <h2> Featured Jobs</h2>
        <Slider {...settings} className={styles.FeatureJobSlider}>
          {featured_jobs.map((element)=>{
            return <div>
              <img className={styles.imgStyle} src={element.img} alt="" />
              <div className={styles.jobTitleCompanyLogo}>
              <img className={styles.companyImgStyle} src={element.companyImg} alt="" />
              <div>
              <h6>
                {element.title}
              </h6>
              <h6>
                {element.company}
              </h6>
              </div>
             
              </div>
              <div className={styles.jobDescription}>{element?.jobDescription}</div>
              <hr/>
              <button className={styles.applyBtn}>Apply For this Job</button>
            </div>
            
          })}
          
        </Slider>
        
      </div>
    );
  }
}