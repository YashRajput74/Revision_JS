/* import CollaborativeEditor from "./CollaborativeEditor";
import HeadlessFormBuilder from "./HeadlessFormBuilder";
import RealTimeTextEditor from "./RealTimeTextEditor";
import UndoRedoFunc from "./UndoRedoFunc"; */

import FormBuilder from "./FormBuilder";
import GraphBasedDependencyEngine from "./GraphBasedDependencyEngine";
import MultipleFileUploads from "./MultipleFileUploads";
import TabsComponent from "./TabsComponent";

export default function App(){
    return (
        <div>
            {/* <RealTimeTextEditor /> */}
            {/* <UndoRedoFunc /> */}
            {/* <HeadlessFormBuilder /> */}
            {/* <CollaborativeEditor /> */}
            <GraphBasedDependencyEngine />
            <MultipleFileUploads />
            <FormBuilder />
            <TabsComponent />
        </div>
    )
}