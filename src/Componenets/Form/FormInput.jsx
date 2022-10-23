import React from 'react';
import { emptyInputs, FormInputs } from '../../Data/FormData/FormData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addContact, updateContact } from '../../redux/slice/reducer';
function FormInput() {
    const contacts = useSelector(state => state.reducer)
    console.log(contacts);
    const { ContactId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState(emptyInputs)
    const [stata, setState] = useState('add')
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (stata === 'add') {
            dispatch(addContact(form))
        } else if (stata === 'update') {
            dispatch(updateContact(form))
        }
        clearInput()
        navigate('/')
    }
    const clearInput = () => {
        setForm(emptyInputs)
    }

    useEffect(() => {
        return () => {
            clearInput()
        }
    }, [])
    useEffect(() => {
        const mohammad = contacts.filter(contact => contact.id === Number(ContactId))[0]
        if (mohammad) {
            setForm(mohammad)
            setState('update')
        }
    }, [])

    return (
        <div>
           <form onSubmit={handleSubmit}>
              <div>
                {FormInputs.map(FormInput =>(
                    <input key={FormInput.id}  onChange={handleChange} required name={FormInput.name} value={form[FormInput.name]} />
                ))}
              </div>
              <div>
                <button type='submit'>
                    Submit
                </button>
              </div>
           </form>
        </div>
    );
}

export default FormInput;