import React, { useState } from 'react';
import styles from "./form.module.css"
import ContactList from './ContactList';
import inputs from './constantse/inputs';
import { v4 } from 'uuid';

const Form = () => {
    const [form, setForm] = useState({
        id:"",
        name: "",
        lastname: "",
        email: "",
        number: ""
    });
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");



    const changeHandler = (e) => setForm(form => ({ ...form, [e.target.name]: e.target.value }));

    const addContacts = () => {
        if (!form.name
            || !form.lastname
            || !form.email
            || !form.number) {
            setAlert("Please enter valid data")
            return;
        }
        setAlert("")
       
const newContact={...form,id: v4()}

        setContacts((contacts) => [...contacts, newContact]);
        
        setForm(
            {
                name: "",
                lastname: "",
                email: "",
                number: ""
            }
        )
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
            {inputs.map((input, index) => {
    if (input.name === "number") {
        return (
            <input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                onChange={changeHandler}
                value={form[input.name]}
                onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value || 0, 10)).toString().slice(0, 11);
                }}
            />
        );
    } else {
        return (
            <input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                onChange={changeHandler}
                value={form[input.name]}
            />
        );
    }
})}

           </div>
            {/* <div>
                <input type="text" name="name"  placeholder='Name' onChange={changeHandler} value={form.name} />
                <input type="text" name="lastname" placeholder='Lastname' onChange={changeHandler} value={form.lastname} />
            </div>
            <div>
                <input type="email" name="email" id="email" placeholder='Email' onChange={changeHandler} value={form.email} />
                <input type="text" name="number" placeholder='Number' onChange={changeHandler} value={form.number}
                    onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value || 0, 10)).toString().slice(0, 11);
                    }}
                />
            </div> */}
            <button onClick={() => addContacts(form)}>Add contact</button>
            <div>
                {alert && <p className={styles.alert}>{alert}</p>}
                {/* {alert ? <p className={styles.alert}>{alert}</p> : ""} */}
            </div>
            <ContactList contacts={contacts} setContacts={setContacts}  form={form}  />

        </div>
    );
};

export default Form;

