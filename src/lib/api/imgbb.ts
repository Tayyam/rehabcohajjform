import axios from 'axios';
import { ImgBBResponse } from '../../types/imgbb';
import { API_CONFIG } from '../config';

export async function uploadImage(file: File): Promise<ImgBBResponse> {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(
      `${API_CONFIG.IMGBB_URL}?key=${API_CONFIG.IMGBB_KEY}`, 
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error('فشل في رفع الصورة. الرجاء المحاولة مرة أخرى.');
  }
}