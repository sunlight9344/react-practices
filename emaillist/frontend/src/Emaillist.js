import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

function Emaillist({emails}) {
    return (
        <ul className={styles.Emaillist}>
            {
                emails.map(e => <Email key={e.no} firstName={e.firstName} lastName={e.lastName} email={e.email} />)
            }
        </ul>
    );
}

export default Emaillist;