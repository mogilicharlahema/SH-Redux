import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const ContactList = ({ setEditIndex, setExistingContact }) => {
    const contacts = useSelector((state) => state.contacts) || [];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (index) => {
        setEditIndex(index);
        setExistingContact(contacts[index]);
        navigate('/');
    };

    return (
        <div>
            <h2>Saved Contacts</h2>
            <ul>
                {contacts.length > 0 ? (
                    contacts.map((contact, index) => (
                        <li key={index}>
                            <i style={{ marginLeft: "20px" }} className="fas fa-user" title="Name"></i>
                            <span>{contact.firstname} {contact.lastname}</span>

                            <i style={{ marginLeft: "20px" }} className="fas fa-mobile-alt" title="Mobile"></i>
                            <span>{contact.mobileNumber}</span>

                            <i style={{ marginLeft: "20px" }} className="fas fa-envelope" title="Email"></i>
                            <span>{contact.email}</span>

                            <Button  onClick={() => handleEdit(index)}>Edit</Button>
                            <Button onClick={() => dispatch(deleteContact(index))}>Delete</Button>

                        </li>
                    ))
                ) : (
                    <p>No contacts saved yet.</p>
                )}
            </ul>
        </div>
    );
};

export default ContactList;
