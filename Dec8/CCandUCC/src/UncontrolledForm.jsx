import { useRef } from "react";

export default function UncontrolledForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;

        console.log("Name:", name);
        console.log("Email:", email);

        // Basic validation
        if (!name) {
            alert("Name is required");
            return;
        }
        if (!email) {
            alert("Email is required");
            return;
        }

        alert("Form submitted!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" ref={nameRef} />
            </div>

            <div>
                <label>Email:</label>
                <input type="email" ref={emailRef} />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
