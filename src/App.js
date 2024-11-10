
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

const App = () => {
    const [editIndex, setEditIndex] = useState(null);
    const [existingContact, setExistingContact] = useState(null);

    return (
        <Provider store={store}>
            <div className="App">
                {/* <h1>Contact List</h1> */}
                <ContactForm editIndex={editIndex} existingContact={existingContact} />
                <ContactList setEditIndex={setEditIndex} setExistingContact={setExistingContact} />
            </div>
        </Provider>
    );
};

export default App;
