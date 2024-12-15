import axios from 'axios';

const API_KEY = 'd25cb59ac5ce8e961f8a50f9a5a0deac';
const API_URL = 'https://api.imgbb.com/1/upload';

export interface ImgBBResponse {
  data: {
    url: string;
    delete_url: string;
    display_url: string;
  };
  success: boolean;
}

export async function uploadImage(file: File): Promise<ImgBBResponse> {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(`${API_URL}?key=${API_KEY}`, formData);
    return response.data;
  } catch (error) {
    throw new Error('فشل في رفع الصورة. الرجاء المحاولة مرة أخرى.');
  }
}