import styles from './error-popup.module.scss';
import { ErrorTypeGraphQl } from '@next-template-nx/data';
import { Col, Modal, Row, Text } from '@nextui-org/react';
import DefaultButton from '../default-button/default-button';

/* eslint-disable-next-line */
export interface ErrorPopupProps {
  errorType: ErrorTypeGraphQl;
  messages: string[];
  onCloseEvent: any;
  openStatus: boolean;
}

export function ErrorPopup(props: ErrorPopupProps) {
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.openStatus}
        onClose={props.onCloseEvent}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              There was a
              {props.errorType === ErrorTypeGraphQl.Network
                ? ' Network Error'
                : ' Request Error'}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {props.messages.map((currentMessage, index) => (
              <Row key={index} justify={'center'}>
                <p className={'text-center font-semibold '}>
                  {' '}
                  {currentMessage}
                </p>
              </Row>
            ))}
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <DefaultButton
            textButton={'Okay Close'}
            onClickAction={props.onCloseEvent}
            isFilled={false}
            isSmall={false}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ErrorPopup;
