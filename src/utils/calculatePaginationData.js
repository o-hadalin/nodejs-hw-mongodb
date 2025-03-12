const calculatePaginationData = ({ page, perPage, totalItems, data }) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  return {
    data: page > totalPages ? [] : data,
    page,
    perPage,
    totalItems,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};

export default calculatePaginationData;
