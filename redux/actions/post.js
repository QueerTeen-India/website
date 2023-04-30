import axios from 'axios'
import { useRouter } from 'next/navigation';

export const createPost = async (state) => {
    try { 
        const request = await axios.post('/api/posts/', state)
        return request.data.post._id;
    } catch (err) {
        console.log(err)
    }
}