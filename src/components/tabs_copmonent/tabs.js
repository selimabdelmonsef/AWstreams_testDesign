import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './tabs.module.css'
import {jobInfo} from '../../utils/job_info'

export default function FindJobTabs() {
    return (
        <Tabs >
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
                    return <div>
                        <h6>{element.title}</h6>
                    </div>
                })}
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>SS</h2>
            </TabPanel>
        </Tabs>
    )
}