import Option from "./Option"

export default function Dropdown({options}) {
    return (
        <>
            <div className="selectedTags">
                
            </div>
            <div>
                <div className="showOptions"></div>
                {options.forEach((option)=>{
                    // console.log(option);
                    <Option tagName={option}/>
                })}
            </div>
        </>
    )
}