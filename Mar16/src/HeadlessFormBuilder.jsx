import { useState } from "react";

const schema = [
    { id: "name", type: "text", label: "Name", required: true },
    { id: "age", type: "number", label: "Age", required: true, min: 18 },
    {
        id: "role",
        type: "select",
        label: "Role",
        options: ["Frontend", "Backend"]
    },
    {
        id: "experience",
        type: "number",
        label: "Years of Experience",
        showIf: { field: "role", value: "Frontend" }
    }
];

const initializeFormData = (schema) => {
    const data = {};
    schema.forEach(field => {
        data[field.id] = "";
    });
    return data;
};

export default function HeadlessFormBuilder() {
    const [formData, setFormData] = useState(initializeFormData(schema));
    const [errors, setErrors] = useState({});
    const Field = ({ field, value, onChange }) => {
        switch (field.type) {
            case "text": return (
                <input type="text" value={value} onChange={e => onChange(field.id, e.target.value)} />
            )
            case "number": return (
                <input type="number" value={value} onChange={e => onChange(field.id, e.target.value)} />
            )
            case "select": return (
                <select value={value} onChange={e => onChange(field.id, e.target.value)}>
                    <option value="">Select</option>
                    {field.options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            )
            default: return null;
        }
    }
    const validate = () => {
        const newErrors = {};

        schema.forEach(field => {
            if (!shouldShowField(field)) return;

            const value = formData[field.id];

            if (field.required && !value) {
                newErrors[field.id] = "Required";
            }

            if (field.type === "number" && field.min && value < field.min) {
                newErrors[field.id] = `Min ${field.min}`;
            }
        });

        return newErrors;
    };
    const handleSubmit = () => {
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Submitted:", formData);
        }
    };
    
    const handleChange = (id, value) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };
    const shouldShowField = (field) => {
        if (!field.showIf) return true;
        return formData[field.showIf.field] === field.showIf.value;
    };
    return (
        <div>
            {schema.filter(shouldShowField).map(field => (
                <div key={field.id}>
                    <label>{field.label}</label>
                    <Field field={field} value={formData[field.id]} onChange={handleChange} />
                </div>
            ))}
        </div>
    )
}