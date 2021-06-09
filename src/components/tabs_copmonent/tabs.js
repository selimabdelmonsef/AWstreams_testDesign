import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './tabs.module.css'
import { jobInfo } from '../../constants/job_info_constant'
import { AiOutlineClockCircle, MdLocationOn } from 'react-icons/all'

export default function FindJobTabs() {
    return (
        <Tabs className={styles.tabsContentStyle}>
            <TabList className={styles.tabList}>
                <Tab>All JOBS</Tab>
                <Tab>FULL TIME</Tab>
                <Tab>TEMPORARY</Tab>
                <Tab>INTERNSHIP</Tab>
                <Tab>PARTIME</Tab>
                <Tab>FREELANCE</Tab>
            </TabList>
            <TabPanel>
                {jobInfo.map((element) => {
                   return  <div>
                    <div className={styles.jobDescription}>
                        <img className={styles.imgStyle} src={element.img} alt="" />
                        <div className={styles.jobInfo}>
                            <div className={styles.jobName}>
                                <h6>{element.title}</h6>
                                <h6>{element.company}</h6>
                                <div>
                                    {element.job_type === "TEMPORARY" ?
                                        <h6 className={styles.jobTypeTEMP}>{element.job_type}</h6>
                                        :
                                        element.job_type === "INTERNSHIP" ?
                                            <h6 className={styles.jobTypeINTERN}>{element.job_type}</h6>
                                            :
                                            element.job_type === "PART TIME" ?
                                                <h6 className={styles.jobTypePART}>{element.job_type}</h6>
                                                :
                                                <h6 className={styles.jobTypeDefault}>{element.job_type}</h6>
                                    }
                                </div>
                            </div>
                            <div className={styles.loc}>
                                <MdLocationOn /> {element.location}
                                <div className={styles.hours}>
                                    <AiOutlineClockCircle /> {element.submitted_hours}</div>
                            </div>
                        </div> 
                    </div>
                    <hr/>
                    </div>
                    
                })}
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any Content 3</h2>
            </TabPanel>
        </Tabs>
    )
}