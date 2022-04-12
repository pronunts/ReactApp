import React from 'react';
import ReactDOM from 'react-dom';
import './ModalInfo.css'

function ModalInfo({children}){
    return ReactDOM.createPortal(
        <div className='backgroundModal'>
            { children }
        </div>,
        document.getElementById('modal_info')
    )
}

export {ModalInfo}
