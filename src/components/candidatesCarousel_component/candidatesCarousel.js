import React, { Component } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './candidatesCarousel.module.css';
import {candidate} from '../../constants/candidates_constant';
export default class CandidatesCarousel extends Component {
    render() {
        return (
            <div className={styles.candiCarouselStyle}>
                <p className={styles.candidatesTitle}>Explore Our Latest Candidates</p>
            <div className={styles.candidateStyle}>
                
            <Splide options={ {
                perMove:1,
                autoWidth:true,
                autoHeight:true,
                rewind: true,
              } }>
                  {candidate.map((element)=>{
                      return <SplideSlide>
                      <img className={styles.cadiImage} src={element.img} alt = ""/>
                      <div className={styles.candidateName}>
              <p>{element.name}</p>
              <p className={styles.jobTitleStyle}>{element.jobTitle}</p>
              </div>
                      </SplideSlide>
                  })}
          </Splide>  
          </div>
          </div>

        )
    }
}