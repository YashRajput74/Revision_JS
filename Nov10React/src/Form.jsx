import { useState } from "react";

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isDisabled = !email || !password;
    return (
        <>
            <form>
                <label htmlFor="emailInput">Email</label>
                <input type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="passwordInput">Password</label>
                <input type="password" name="passwordInput" id="passwordInput" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </form>
            <button disabled={isDisabled}>Submit</button>
        </>
    )
}