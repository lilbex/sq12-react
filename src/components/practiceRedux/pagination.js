import styled from "styled-components";

const Pagination = ({
  handlePreviousClick,
  handleNextClick,
  handleClick,
  pageNeighbors,
  totalPages,
  currentPage,
}) => {

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);
      let pages = [1];
      for (let i = startPage; i <= endPage; i++) {
        pages = [...pages, i];
      }
      pages = [...pages, totalPages];
      return pages;
    }
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };


  return (
    <nav>
      <PaginationContainer>
        <li>
          <button onClick={handlePreviousClick}>Previous</button>
        </li>

        {fetchPageNumbers().map((page) => (
          <li key={page}>
            <button onClick={() => handleClick(page)}>{page}</button>
          </li>
        ))}
        <li>
          <button onClick={handleNextClick}>Next</button>
        </li>
      </PaginationContainer>
    </nav>
  );
};

export default Pagination;

const PaginationContainer = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`;
