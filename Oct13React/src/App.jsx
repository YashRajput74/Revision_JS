import form from "./data";
import FormRenderer from "./FormRenderer";

export default function App(){
    
    return (
        <div>
            <FormRenderer fields={form} />
        </div>
    )
}