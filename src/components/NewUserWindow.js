import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import NewUserForm from './NewUserForm';
import newUserFormStyles from '../styles/NewUserForm.css'; // Import the CSS

const NewUserWindow = ({ newUserWindow, setNewUserWindow }) => {
    const windowFeatures = 'width=400,height=400,resizable,scrollbars=yes';

    useEffect(() => {
        if (newUserWindow) {
            newUserWindow.document.title = 'New User';

            // Clear existing content if any
            newUserWindow.document.body.innerHTML = '';

            // Inject CSS into the new window
            const styleElement = newUserWindow.document.createElement('style');
            styleElement.textContent = newUserFormStyles;
            newUserWindow.document.head.appendChild(styleElement);

            // Render the new user form in the new window
            const formContainer = newUserWindow.document.createElement('div');
            newUserWindow.document.body.appendChild(formContainer);

            // Render NewUserForm component inside the formContainer
            ReactDOM.render(<NewUserForm />, formContainer);
        }
    }, [newUserWindow]);

    const openNewUserWindow = () => {
        const newWindow = window.open('', 'New User', windowFeatures);

        if (newWindow) {
            setNewUserWindow(newWindow);
        } else {
            console.error('Failed to open new window. Popup blocker may be enabled.');
        }
    };

    const closeNewUserWindow = () => {
        if (newUserWindow && !newUserWindow.closed) {
            newUserWindow.close();
            setNewUserWindow(null);
        }
    };

    return (
        <div>
            <button onClick={openNewUserWindow}>New User</button>
        </div>
    );
};

export default NewUserWindow;
