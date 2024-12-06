import axios from "axios";

export async function variantApi() {
  try {
    const res = await axios.get(
      "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch"
    );
    return res?.data;
  } catch (error) {
    console.log(error);
  }
}
