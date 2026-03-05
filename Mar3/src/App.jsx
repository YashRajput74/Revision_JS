import Canvas from "./Canvas"
import WidgetGrid from "./WidgetGrid"
import './App.css';
import TaggingInput from "./TaggingInput";
import ImageGallery from "./ImageGallery";
import BreadCrumbs from "./BreadCrumbs";
import ReusableDragDropList from "./ReusableDragDropList";

export default function App() {
    return (
        <div>
            {/* <Canvas initialData={data} /> */}
            {/* <TaggingInput /> */}
            {/* <WidgetGrid /> */}
            {/* <ImageGallery /> */}
            {/* <BreadCrumbs /> */}
            <ReusableDragDropList />
        </div>
    )
}