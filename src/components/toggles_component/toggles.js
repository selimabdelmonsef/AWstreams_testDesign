import React from 'react'
import styles from './toggles.module.css'
import { Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'

export default class TogglingForm extends React.Component {

    render() {
        return (
            <div className={styles.togglesFormStyle}>
              <Form>
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
</Form>


            </div>
        )
    }
}