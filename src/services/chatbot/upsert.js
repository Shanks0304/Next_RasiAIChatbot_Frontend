import axios from 'axios';
import toast from 'react-hot-toast';

export const existing_chatbot_upsert_file = async (chatbotName, uploadedFile) => {
    const formData = new FormData();
    formData.append("file", uploadedFile);
    formData.append("chatbotName", chatbotName);

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upsert_file`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        });
        console.log('File uploaded successfully:', response);
        return response.status;
    } catch (error) {
        console.error('Error uploading response:', error.response);
        return error.response.status;
    }
}