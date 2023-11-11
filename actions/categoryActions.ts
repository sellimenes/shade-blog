import axios from "axios";

export const createCategory = async (name: String) => {
  try {
    const response = await axios.post("/api/category", {
      name,
    });
    // Başarı durumunda gerekli işlemler yapılabilir
  } catch (error) {
    console.log(error);
    // Hata durumunda gerekli işlemler yapılabilir
    throw error; // Hatanın yukarıya fırlatılması istenirse
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get("/api/category");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteCategory = async (id: String) => {
  try {
    await axios.delete("/api/category", {
      data: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
