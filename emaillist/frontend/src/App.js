import React, {useState} from 'react';
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import data from './assets/json/data';

function App() {
    
    const[emails, setEmails] = useState(data);
    const searchEmail = (keyword) => {
        setEmails(data.filter(email => (email.firstName+email.lastName).includes(keyword) || email.email.includes(keyword)));
    };

    return (
        <div id={'App'}>
            <RegisterForm />
            <Searchbar searchEmail={searchEmail}/>
            <Emaillist emails={emails} />
        </div>  
    );
}

export {App};