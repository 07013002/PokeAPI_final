const Pagination = (props: any) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;

    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}><div>◀</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>▶</div></button>
        </div>
    );
}

export default Pagination;