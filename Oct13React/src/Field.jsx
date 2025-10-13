export default function Field({ field }) {
    const { id, type, label, placeholder, options, required } = field;

    if(type=="text"){
        return (
            <input type="text" id={id} placeholder={placeholder} required={required}/>
        )
    }
    else if(type == "email"){
        return (
            <input type="email" name={id} id={id} placeholder={placeholder} required={required}/>
        )
    }
    else if(type=="radio"){
        return (
            <>
                {options.map((option,index)=>(
                    <label key={index}>
                        <input type="radio" name={id} id={id} value={option}/>{option}
                    </label>
                ))}
            </>
        )
    }
    else{
        return (
            <div>
                Error rendering form
            </div>
        )
    }
}