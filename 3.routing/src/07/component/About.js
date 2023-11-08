import React from 'react';
import {SiteLayout} from "../layout";
import styles from '../assets/scss/component/About.scss';
import {useNavigate} from 'react-router';

export default function About() {
    const navigate = useNavigate();

    setTimeout(()=>{
        // 이렇게 하면은 새로고침 해버림 새로 로딩을 해버린다.
        // window.location.href = '/error';

        navigate('/error');
    }, 1000);
    return (
        <div className={styles.About}>
            <h2>SUNLIGHT 입니다.</h2>
        </div>
    );
}