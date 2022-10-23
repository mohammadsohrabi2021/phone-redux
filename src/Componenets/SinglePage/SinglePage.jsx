import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SinglePageData from '../../Data/SinglePageData/SinglePageData';
function SinglePage() {
    const contacts = useSelector(state => state.reducer)
    const { ContactId } = useParams()
    const [contact, setContact] = useState({})

    useEffect(() => {
        setContact(contacts.filter(item => item.id === Number(ContactId))[0])
    }, [])

    return (
        <div>
            {SinglePageData.map(show => (
                <div key={show.id}>
                    {show.name} : {contact[show.name]}
                </div>
            ))}
        </div>
    );
}

export default SinglePage;