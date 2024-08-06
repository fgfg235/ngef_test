import React from 'react';
import ModalForm from './ModalForm.jsx';
import { Styles } from "./styles/popupModal.jsx";

class PopupModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalBtn: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                modalBtn: !prevState.modalBtn,
            }
        });
    }

    render() {
        let modalBody = (this.state.modalBtn ? ' active' : '');

        return (
            <Styles>
                {/* Popup Modal */}
                <button type="button" onClick={this.handleClick} className="booking-btn">팝업창</button>

                <div className={`popup-modal${modalBody}`}>
                    <div className="modal-overlay" onClick={this.handleClick}></div>
                    <div className="modal-box">
                        <div className="modal-title text-center">
                            <h4>참가신청</h4>
                            <button type="button" onClick={this.handleClick} className="modal-close">
                                <i className="las la-times"></i>
                            </button>
                        </div>
                        <div className="modal-form">
                            <ModalForm />
                        </div>
                    </div>
                </div>
            </Styles>
        )
    }

}

export default PopupModal