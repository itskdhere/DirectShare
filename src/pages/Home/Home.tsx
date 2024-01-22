import { Button, FlexGrid, Row, Column } from '@carbon/react';
import { Upload, Download } from '@carbon/icons-react';
import { Link as DomLink } from 'react-router-dom';
import { FC } from 'react';

import Header from '../../components/Header';

import './Home.modules.scss';

const Home:FC = () => {
    return (
        <>
            <Header headerHref='/' />
            <FlexGrid className='main'>
                <Row className='header-spacing'></Row>
                <Row className='title'></Row>
                <Row className='description'></Row>
                <Row className='send-receive-btn-container-row'>
                    <Column className='send-receive-btn-container-col' sm={{ span: 3, offset: 0 }}>
                        <DomLink to='/send'>
                            <Button className='send-btn' renderIcon={Upload} iconDescription="Send" >Send</Button>
                        </DomLink>
                        &nbsp; &nbsp; &nbsp;
                        <DomLink to='/receive'>
                            <Button className='receive-btn' renderIcon={Download} iconDescription="Receive" >Receive</Button>
                        </DomLink>
                    </Column>
                </Row>
            </FlexGrid>
        </>
    );
};

export default Home;