import React from 'react';
import { emptyInputs, FormInputs } from '../../Data/FormData/FormData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addContact, updateContact } from '../../redux/slice/reducer';
import { Grid, TextField, Button } from '@mui/material';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

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
        <Grid>
            <form onSubmit={handleSubmit}>
                <Grid  container style={{flexDirection: 'column' }}  justifyContent={'space-around'} alignItems={{xs:'center',sm:'initial'}} height={400} mt={5} >
                    {FormInputs.map(FormInput => (
                        <TextField  my={2} variant="filled" key={FormInput.id}  onChange={handleChange} required name={FormInput.name} value={form[FormInput.name]} label={FormInput.name} />
                    ))}
                </Grid>
                <Grid mt={2} container justifyContent={'center'} alignItems={'center'} >
                    <Button variant="outlined" endIcon={<SaveRoundedIcon/>}  type='submit'>
                       submit
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
}

export default FormInput;