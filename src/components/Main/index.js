import React from 'react';

import './styles.css';
import Form from '../../containers/formContainer';
import Outcomes from '../../containers/outcomesContainer';

const Main = () => (
    <main className="main">
        <Form />
        <Outcomes />
    </main>
);

export default Main;