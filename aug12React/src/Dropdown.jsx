import Option from "./Option"
/* improper  */
export default function Dropdown({options}) {
    return (
        <>
            <div className="selectedTags">
                
            </div>
            <div>
                <div className="showOptions"></div>
                {options.map((option)=>
                    // console.log(option);
                    <Option tagName={option} key={option}/>
                )}
            </div>
        </>
    )
}