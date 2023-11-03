import React from 'react';
import './assets/Form.css';

export default function Form() {

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email.value, e.target.password.value);

        // validation code

        // ajax login
        // e.target.submit 같은 거 하는 거 아님요
    };

    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post"
            onSubmit={onSubmit}>
            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="로그인" />
        </form>
    );
}