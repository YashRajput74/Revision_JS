import RichCodeEditor from "./RichCodeEditor";
import './App.css'
import FolderStructure from "./FolderStructure";
import UrlShortener from "./UrlShortener";
import ToDoList from "./ToDoList";
import DebouncedSearch from "./DebouncedSearch";
import ResizableTableComponent from "./ResizableTableComponent";
export default function App(){
	return (
		<div>
			{/* <RichCodeEditor /> */}
			<FolderStructure />
			<UrlShortener />
			<ToDoList />
			<DebouncedSearch />
			<ResizableTableComponent />
		</div>
	)
}