import axios from "axios";

export const createPost = async (
  title: String,
  content: String,
  categoryId: String
) => {
  try {
    axios.post("/api/post", {
      title,
      content,
      categoryId,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get("/api/post");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPost = async (id: String) => {
  try {
    const response = await axios.get(`/api/post/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deletePost = async (id: String) => {
  try {
    axios.delete(`/api/post/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
