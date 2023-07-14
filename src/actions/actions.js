export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: category,
  };
};

export const setSearchTerm = (searchTerm) => {
  return {
    type: "SET_SEARCH_TERM",
    payload: searchTerm,
  };
};

export const setIsLoading = (loading) => {
  return {
    type: "SET_IS_LOADING",
    payload: loading,
  };
};

export const setPostArray = (postArray) => {
  return {
    type: "SET_POST_ARRAY",
    payload: postArray,
  };
};
