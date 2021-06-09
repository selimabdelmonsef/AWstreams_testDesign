import React from 'react';
import FindJobTabs from '../../components/tabs_copmonent/tabs';
import TogglingForm from '../../components/toggles_component/toggles';
import FeatureJobSlider from '../../components/jobSlider_component/jobSlider';
import CandidatesCarousel from '../../components/candidatesCarousel_component/candidatesCarousel';
export default class LandingPage extends React.Component {

    render(){
        return(
         <div>
             <FindJobTabs></FindJobTabs>
             <TogglingForm></TogglingForm>
             <FeatureJobSlider></FeatureJobSlider>
             <CandidatesCarousel></CandidatesCarousel>
             </div>
        )
    }
}