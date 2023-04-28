const initialState = {
  posts: [],
  newPost: {
    title: "",
    content: "",
  },
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;
