import { FlexGrid, CodeSnippet, InlineLoading, FileUploader, Button, Row, Column } from '@carbon/react';
import { Share, StopFilledAlt, SendAltFilled as CarbonSendIcon } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { FC, useState } from 'react';

import Header from '../../components/Header';

import './Send.modules.scss';

const Send: FC = () => {
  const [isFileSelectionDone, setIsFileSelectionDone] = useState(false);
  const [isCodeLoading, setIsCodeLoading] = useState(true);

  return (
    <>
      <Header headerHref='#' />
      {!isFileSelectionDone ? (
        <FlexGrid className='send-step-2-container'>
          <Row className='header-spacing'></Row>
          <Row className='title'></Row>
          <Row className='description'></Row>
          <Row className='select-files-container-row'>
            <Column className='select-files-container-col' sm={{ span: 3, offset: 0 }}>
              <FileUploader
                accept={[]}
                buttonKind="primary"
                buttonLabel="Add File(s)"
                className="lol"
                disabled={false}
                filenameStatus="edit"
                id='myfile'
                iconDescription="Delete File"
                labelDescription="Max file size is 500MB"
                labelTitle="Select files you want to send"
                multiple={true}
                name=""
                size="lg"
                onChange={(e) => console.log(e.target)}
                onDelete={(e) => console.log(e)}
              />
            </Column>
          </Row>
          <Row className='send-files-btn-container-row'>
            <Column className='send-files-btn-container-col' sm={{ span: 3, offset: 0 }}>
              <Button onClick={() => setIsFileSelectionDone(true)} type="submit" kind='primary' renderIcon={CarbonSendIcon} className="send-files-btn">
                Send
              </Button>
              <Link to='/'>
                <Button kind="danger--ghost" className="cancel-send-btn">
                  Cancel
                </Button>
              </Link>
            </Column>
          </Row>
        </FlexGrid>
      ) : (
        <FlexGrid className='send-step-3-container'>
          <Row className='header-spacing'></Row>
          <Row className='title'></Row>
          <Row className='description'></Row>
          <Row className='share-code-container-row'>
            <Column className='share-code-container-col' sm={{ span: 3, offset: 0 }}>
              <h5 className='share-code-description'>To Receive Files, <br /> Scan The QR Code:</h5>
              <img src={isCodeLoading ? './loader-blocks-200px.svg' : ''} className='share-qr-code-img' alt='QR Code' />
              <div className="code-spacing"></div>
              <h5 className='share-code-description'>Or, Use the Link:</h5>
              <CodeSnippet className='url-code-copy' type="single" feedback="Copied to clipboard">
                {isCodeLoading ? <InlineLoading status="active" iconDescription="Loading" description="Loading URL..." /> : 'URL'}
              </CodeSnippet>
              <div className="code-spacing"></div>
              <h5 className='share-code-description'>Or, Use The Code:</h5>
              <CodeSnippet className='url-code-copy' type="single" feedback="Copied to clipboard">
                {isCodeLoading ? <InlineLoading status="active" iconDescription="Loading" description="Loading Code..." /> : 'Code'}
              </CodeSnippet>
              <div className="code-spacing"></div>
              <Button kind='primary' renderIcon={Share} className='share-details-btn' >
                Share Receive Details
              </Button>
            </Column>
          </Row>
          <Row className='stop-share-btn-container-row'>
            <Column className='stop-share-btn-container-col' sm={{ span: 3, offset: 0 }}>
              <Link to='/'>
                <Button kind="danger--tertiary" renderIcon={StopFilledAlt} className='stop-sending-btn' >
                  Stop Sending
                </Button>
              </Link>
            </Column>
          </Row>
        </FlexGrid>
      )}
    </>
  )
}

export default Send;