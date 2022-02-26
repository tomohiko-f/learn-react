import {useState, useEffect} from 'react';
import axios from 'axios';


const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    useEffect(() => {
        let isMouted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMouted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMouted) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                isMouted && setIsLoading(false);
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            isMouted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl])

    return {data, fetchError, isLoading};
}

export default useAxiosFetch;