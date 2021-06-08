import React from 'react'
import styles from './toggles.module.css'
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/all'

export default class TogglingForm extends React.Component {

    render() {
        return (
            <div>
                <Form className={styles.togglesFormStyle}>
                    <div>
                        <BsSearch className={styles.searchIcon}/>
                    <input placeholder="Start Searching"></input>
                    <hr/>
                    </div>  
                    <Form.Group>
                        <Form.Label>JOB</Form.Label>
                        <Form.Control placeholder="job title, keywords" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>LOCATION</Form.Label>
                        <Form.Control placeholder="City, province or region" />
                    </Form.Group>
                    <div>CATEGORY</div>
                    <select>
                        <option selected>Select Industry</option>
                        <option >Engineering</option>
                        <option>Business</option>
                        <option>Designer</option>
                    </select>
                    <div>
                    <button className={styles.searchBtn}>
                    <BsSearch className={styles.searchIcon}/> Search</button>
                    </div>
                    
                </Form>


            </div>
        )
    }
}