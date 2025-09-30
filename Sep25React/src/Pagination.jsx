export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    let numOfPages = (totalItems / itemsPerPage);
    if (totalItems % itemsPerPage) {
        numOfPages++;
    }
    const pageNumbers = [];
    for (let i = 1; i <= numOfPages; i++) {
        pageNumbers.push(i);
    }
    let pageButtons;
    if (numOfPages > 12) {
        let pagesToShow = []
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pagesToShow.push(i);
        }
        pageButtons = <>
            <button
                key={pageNumbers[0]}
                onClick={() => onPageChange(pageNumbers[0])}
                className={`pageNum ${currentPage == pageNumbers[0] ? 'active' : ''}`}
            >
                {pageNumbers[0]}
            </button>
            <div className="dots">
                .
            </div>
            <div className="dots">
                .
            </div>
            {pagesToShow.map((pageNum) => (
                <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`pageNum ${currentPage == pageNum ? 'active' : ''}`}
                >
                    {pageNum}
                </button>
            ))}
            <div className="dots">
                .
            </div>
            <div className="dots">
                .
            </div>
            <button
                key={pageNumbers[numOfPages - 1]}
                onClick={() => onPageChange(pageNumbers[numOfPages - 1])}
                className={`pageNum ${currentPage == pageNumbers[numOfPages - 1] ? 'active' : ''}`}
            >
                {pageNumbers[numOfPages - 1]}
            </button>
        </>
    }
    else {
        pageButtons = pageNumbers.map((pageNum) => (
            <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`pageNum ${currentPage == pageNum ? 'active' : ''}`}
            >
                {pageNum}
            </button>
        ))
    }
    return (
        <div className="pageNumWrapper">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                className="pageNum"
                disabled={currentPage == 1}
            >
                &lt;
            </button>
            {pageButtons}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                className="pageNum"
                disabled={currentPage == numOfPages}
            >
                &gt;
            </button>
        </div>
    )
}