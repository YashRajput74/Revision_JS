const form = [
    {
        id: "name",
        type: "text",
        label: "Full name",
        placeholder: "Please enter full name",
        required: true,
    },
    {
        id: "email",
        type: "email",
        label: "Email Address",
        placeholder: "example@gmail.com",
        required: true,
    },
    {
        id: "gender",
        type: "radio",
        label: "Gender",
        options: ["Male","Female"],
        required: true,
    },
]

export default form;