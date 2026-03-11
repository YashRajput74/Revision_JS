import RichCodeEditor from "./RichCodeEditor";
import './App.css'
import FolderStructure from "./FolderStructure";
import UrlShortener from "./UrlShortener";
import ToDoList from "./ToDoList";
import DebouncedSearch from "./DebouncedSearch";
import ResizableTableComponent from "./ResizableTableComponent";
import NestedDragDrop from "./NestedDragDropList";
import SpreadSheet from "./SpreadSheet";
import CartComponent from "./CartComponent";
import NavbarComponent from "./NavbarComponent";
import JSONViewer from "./JSONViewer";
import SchemaDrivenTable from "./SchemaDrivenTable";
export default function App() {
	
	return (
		<div>
			{/* <RichCodeEditor /> */}
			{/* <FolderStructure />
			<UrlShortener />
			<ToDoList />
			<DebouncedSearch />
			<ResizableTableComponent />
			<NestedDragDrop />
			<SpreadSheet />
			<CartComponent />
			<NavbarComponent /> */}
			<JSONViewer />
			<SchemaDrivenTable />
		</div>
	)
}