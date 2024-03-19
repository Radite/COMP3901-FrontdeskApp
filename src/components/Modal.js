import React from 'react';
import ReactDOM from 'react-dom';


const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };
  
  const MODAL_STYLES = {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '4px',
    width: '80%',
    height: 'auto',
    maxWidth: '600px',
  };
  
const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default Modal;
