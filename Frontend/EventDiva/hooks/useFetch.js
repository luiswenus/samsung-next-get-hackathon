import { useState, useEffect } from 'react';
// import axios from 'axios';


const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        setIsLoading(true);
        try {
    
            await new Promise(resolve => setTimeout(resolve, 2000));  

            const response = {
                events: [
                        {
                            id: 1,
                            title: 'NextgenAI',
                            place: 'SF Marina',
                            time: 'Tuesday 12pm',
                            description: 'A cutting-edge seminar on the future of artificial intelligence and its applications. Open to all tech enthusiasts.'
                        },
                        {
                            id: 2,
                            title: 'Design 101',
                            place: 'Downtown Studio',
                            time: 'Wednesday 3pm',
                            description: 'A beginner-friendly workshop focused on the basics of design principles, from layout to typography. No prior experience needed.'
                        },
                        {
                            id: 3,
                            title: 'Eco Warriors Meet',
                            place: 'Central Park, West Entrance',
                            time: 'Friday 10am',
                            description: 'A community gathering for environmental activists and eco-friendly individuals. Discuss initiatives, campaigns, and innovative green ideas.'
                        }
                    ]
            };
            
            console.log(data);


            setData(response.events);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;