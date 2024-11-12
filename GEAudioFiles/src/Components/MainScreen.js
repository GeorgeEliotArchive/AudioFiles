import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import WorkItems from './WorkItems';
import data from '../Backend_Services/data_op.js';
import './mainScreen.scss';
import { search } from '../Backend_Services/search_data';

// Main screen with header and search bar
function MainScreen() {
    const [list, setList] = useState(data);
    

    
}

export default MainScreen;
