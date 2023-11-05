export function PageRanger({page, lastPage, setPage}) {

    let pageLabel = "Page " + page + "/" + lastPage;
    if (page === 0) {
        pageLabel = "Cover Page"
    } else if (page === lastPage) {
        pageLabel = "Back Cover"
    }

    function toNextPage() {
        let nextP = Number(page) + 1;
        setPage(Math.min(nextP, 241));
    }

    function toPreviousPage() {
        let prevP = page - 1;
        setPage(Math.max(prevP, 0));
    }

    function handlePageSpan(event) {
        setPage(event.currentTarget.value);
    }

    return (
        <div className="container">
                <input type="range" className="form-range" id="page-range" 
                min="0" max={lastPage} value={page} onChange={handlePageSpan} />
                <div className="input-group justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={toPreviousPage}>Previous</button>
                    <span className="input-group-text" id="pagination">{pageLabel}</span>
                    <button type="button" className="btn btn-primary" onClick={toNextPage}>Next</button>
                </div>
        </div>
    )
}