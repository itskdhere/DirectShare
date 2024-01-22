import { TextInput, Button, Loading, FlexGrid, Row, Column } from '@carbon/react';
import { StopFilledAlt, SendAltFilled as CarbonSendIcon } from '@carbon/icons-react';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import './Receive.modules.scss';

const Receive: FC = () => {
  const [isCodeEntered, setIsCodeEntered] = useState(false);

  return (
    <>
      <Header headerHref='#' />
      {!isCodeEntered ? (
        <FlexGrid className='receive-step-2-container'>
          <Row className='header-spacing'></Row>
          <Row className='title'></Row>
          <Row className='description'></Row>
          <Row className='receive-url-code-container-row'>
            <Column className='receive-url-code-container-col' sm={{ span: 3, offset: 0 }}>
              <TextInput id="receive-url-code-input" type="text" labelText="Enter Receive Link / Code:" helperText={`Enter Either "${window.location.href}?code=a1b2c3" Or "a1b2c3"`} placeholder="Link / Code" />
            </Column>
          </Row>
          <Row className='receive-files-btn-container-row'>
            <Column className='receive-files-btn-container-col' sm={{ span: 3, offset: 0 }}>
              <Button onClick={() => setIsCodeEntered(true)} type="submit" kind='primary' renderIcon={CarbonSendIcon} className="receive-url-code-btn">
                Receive
              </Button>
              <Link to='/'>
                <Button kind="danger--ghost" className="cancel-receive-btn">
                  Cancel
                </Button>
              </Link>
            </Column>
          </Row>
        </FlexGrid>
      ) : (
        <FlexGrid className='receive-step-3-container'>
          <Row className='header-spacing'></Row>
          <Row className='title'></Row>
          <Row className='description'></Row>
          <Row className='received-files-container-row'>
            <Column className='received-files-container-col' sm={{ span: 3, offset: 0 }}>
              <Loading active={true} withOverlay={false} description='loading' />
            </Column>
          </Row>
          <Row className='stop-receive-btn-container-row'>
            <Column className='stop-receive-btn-container-col' sm={{ span: 3, offset: 0 }}>
              <Link to='/'>
                <Button kind="danger--tertiary" renderIcon={StopFilledAlt} className='stop-receiving-btn' >
                  Stop Receiving
                </Button>
              </Link>
            </Column>
          </Row>
        </FlexGrid>
      )}
    </>
  )
}

export default Receive;