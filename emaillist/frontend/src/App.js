import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';

function App() {
    const[emails, setEmails] = useState(null);
    const searchEmail = (keyword) => {
        setEmails(data.filter(email => (email.firstName+email.lastName).includes(keyword) || email.email.includes(keyword)));
    };

    const addEmail = async (email) => {
        const response = await fetch('/api', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(email)
        });

        if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`)
        }

        const json = await response.json();

        if(json.result !== 'success') {
            throw new Error(`${json.result} ${json.message}`)
        }

        const newEmails = [json.data, ...emails];
        setEmails(newEmails);
    }

    const fetchList = async () => {
        try{const response = await fetch('/api', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            setEmails(json.data);

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {fetchList()},[]);

    return (
        <div id={'App'}>
            <RegisterForm addEmail={addEmail} />
            <Searchbar searchEmail={searchEmail} />
            { emails === null ?
                null :
                <Emaillist emails={emails} />
            }
        </div>  
    );
}

export {App};