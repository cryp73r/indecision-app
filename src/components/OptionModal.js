import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>{
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            ariaHideApp={false}
            onRequestClose={props.handleClearSelectedOption}
        >
            <h3>Selcted Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );
}

export default OptionModal;