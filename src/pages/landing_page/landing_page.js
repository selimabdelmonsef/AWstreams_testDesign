import React from 'react';
import FindJobTabs from '../../components/tabs_copmonent/tabs';
import TogglingForm from '../../components/toggles_component/toggles';
import FeatureJobSlider from '../../components/jobSlider_component/jobSlider';
import CandidatesCarousel from '../../components/candidatesCarousel_component/candidatesCarousel';
import styles from './landing_page.module.css'
export default class LandingPage extends React.Component {

    render(){
        return(
         <div>
             <div className={styles.tabsTogglingWrap}>
             <FindJobTabs></FindJobTabs>

             <TogglingForm></TogglingForm>
             <FeatureJobSlider></FeatureJobSlider>
             </div>
             
             <CandidatesCarousel></CandidatesCarousel>
             </div>
        )
    }
}