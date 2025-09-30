import { ToastProvider, useToast } from './ToastProvider';
import ToastContainer from './ToastContainer';
import './App.css'
import Pagination from './Pagination';
import { useState } from 'react';

export default function App() {
    return (
        <ToastProvider>
            <MainComponent />
            <ToastContainer />
        </ToastProvider>
    );
}

function MainComponent() {
    const { addToast } = useToast();
    const totalItems = 105;
    const itemsPerPage = 7;
    const [currentPage,setCurrentPage] = useState(7);
    const onPageChange = (pageNum) => {
        addToast({ content: `Page: ${pageNum}`, position: "bottom-right" })
        setCurrentPage(pageNum);
    }
    return (
        <>
            <button onClick={() => addToast({ content: "Hello World!", position: "bottom-right" })}>
                Show Toast
            </button>
            <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={onPageChange}/>
        </>
    );
}
