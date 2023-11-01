import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

function Emaillist({emails}) {
    return (
        <ul className={styles.Emaillist}>
            {
                emails.map((e,i) => <Email key={i} firstName={e.firstName} lastName={e.lastName} email={e.email} />)
            }
        </ul>
    );
}

export default Emaillist;