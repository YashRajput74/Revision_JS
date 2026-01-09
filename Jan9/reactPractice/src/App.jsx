/* 
Build a SearchInput component with these requirements:

Controlled input //useState

Debounced API call (300ms) //debouncing??useEffect??

Show loading state //We can do that

Cancel previous request when typing fast //“If a request is already in flight and the user types again, abort it.”
*/

export default function App(){
    return (
        <div>
            <SearchInput />
        </div>
    )
}