import Field from "./Field"

export default function FormRenderer({ fields }) {
    return (
        <form>
            {fields.map((field) => (
                <div key={field.id}>
                    <label htmlFor={field.id} style={{marginRight:"1rem"}}>{field.label}</label>
                    <Field field={field}/>
                </div>
            ))}
            <button className="submit button">Submit form</button>
        </form>
    )
}