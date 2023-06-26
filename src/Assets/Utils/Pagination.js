function pagination(data, currentPage) {
    let pagesSize = 5;
    let showData= [];
    const endIndex = pagesSize * currentPage;
    const startIndex = endIndex - pagesSize;

    showData.push(data.slice(startIndex, endIndex));
    return showData
}

export default pagination;