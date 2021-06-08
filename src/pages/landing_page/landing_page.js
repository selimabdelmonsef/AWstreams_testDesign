import React from 'react';
import FindJobTabs from '../../components/tabs_copmonent/tabs'
import TogglingForm from '../../components/toggles_component/toggles'
export default class LandingPage extends React.Component {

    render(){
        return(
         <div>
             <FindJobTabs></FindJobTabs>
             <TogglingForm></TogglingForm>
             </div>
        )
    }
}