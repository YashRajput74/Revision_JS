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
import GithubActivityTimeline from "./GithubActivityTimeline";
import Modal from "./Modal";
import SplitPaneLayout from "./SplitPaneLayout";
import { Pane } from "./Pane";
import CommentSystem from "./CommentSystem";
import Users from "./Users";
export default function App() {

	return (
		<div>
			{/* <RichCodeEditor /> */}
			<FolderStructure />
			<UrlShortener />
			<ToDoList />
			<DebouncedSearch />
			<ResizableTableComponent />
			<NestedDragDrop />
			<SpreadSheet />
			<CartComponent />
			{/* <NavbarComponent />
			<JSONViewer />
			<SchemaDrivenTable />
			<GithubActivityTimeline /> */}
			{/* <Modal /> */}
			{/* <div style={{ width: "500px", height: "500px" }}>

				<SplitPaneLayout direction="horizontal">

					<Pane>
						Sidebar
					</Pane>

					<Pane>
						Editor
					</Pane>

					<Pane>
						Terminal
					</Pane>

				</SplitPaneLayout>
			</div> */}
			<CommentSystem />
			<Users />
		</div>
	)
}