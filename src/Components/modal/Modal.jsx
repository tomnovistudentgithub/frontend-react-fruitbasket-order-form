import React from 'react';
import './Modal.css';

function Modal({ show, children, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <button className="close-button" onClick={onClose}></button>
                {children}
            </div>
        </div>
    );
}

export default Modal;