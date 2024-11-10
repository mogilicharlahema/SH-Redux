import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/actions';
import "../Components/Form.css";


const ContactForm = ({ editIndex, existingContact }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mobileNumber: '',
        email: '',
    });

    useEffect(() => {
        if (editIndex !== null && existingContact) {
            setFormData(existingContact);
        } else {
            setFormData({ firstname: '', lastname: '', mobileNumber: '', email: '' });
        }
    }, [editIndex, existingContact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            dispatch(editContact(editIndex, formData));
        } else {
            dispatch(addContact(formData));
        }
        setFormData({ firstname: '', lastname: '', mobileNumber: '', email: '' });
    };

    return (
        <>
        <h1 style={{textAlign:"center",marginTop:"40px",color:"GrayText"}}>ContactForm Using Redux</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <button type="submit">{editIndex !== null ? 'Update Contact' : 'Add Contact'}</button>
        </form>
        </>
    );
};

export default ContactForm;
