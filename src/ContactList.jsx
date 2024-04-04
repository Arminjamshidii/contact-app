import React from 'react';
import styles from './contactList.module.css';
import {AtSymbolIcon,PhoneIcon,UserIcon} from "@heroicons/react/24/solid"
import {TrashIcon} from "@heroicons/react/24/outline"


const ContactList = ({contacts,setContacts}) => {
    const deleteHandler=(id)=>{
     const newContacts= contacts.filter(contact => contact.id !==id);
    setContacts(newContacts)}
    
    return (
        <div>
            <h2>Contact list</h2>
            {contacts.length?( 
            <ul>
            {contacts.map((contact ) => (
          <li className={styles.contact} key={contact.id}>
            <p><span><UserIcon className={styles.icon}/></span> {contact.name}  {contact.lastname}</p>
            <p><span><AtSymbolIcon className={styles.icon}/></span> {contact.email}</p>
            <p><span><PhoneIcon className={styles.icon}/></span> {contact.number}</p>
            <span><TrashIcon onClick={()=>deleteHandler(contact.id)} className={styles.trash}/></span>
          </li>
        ))}
            </ul>):<h3 className={styles.noContact}>no contacts list ....!</h3>}
           
            
        </div>
    );
};

export default ContactList;