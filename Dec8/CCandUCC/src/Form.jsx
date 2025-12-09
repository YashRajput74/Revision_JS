import { useState } from "react";

export default function Form() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [errors, setErrors] = useState();
    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Name is required";
        if (!email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email))
            newErrors.email = "Invalid email format";
        return newErrors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log("Submitted:", { name, email });
    };
    return (
        <form onSubmit={handleSubmit} style={{ display: "flex",flexDirection:"column"}}>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            {/* {errors.name && <p>{errors.name}</p>} */}
            <label htmlFor="name">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* {errors.email && <p>{errors.email}</p>} */}
        </form>
    )
}