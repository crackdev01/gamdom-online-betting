import axios from 'axios';
import { useQuery } from 'react-query';

export function useRequestSportsEvents() {
    return useQuery({
        queryKey: ['sports-events'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/events`);
            return res.data;
        },
    });
  }