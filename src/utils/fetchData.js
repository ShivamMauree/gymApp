export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_EXERCISE_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const videoOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '79d1475719msh6751d0f61bd3851p1d4882jsnde1184e6cefb',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const exerciseUrl = 'https://exercisedb.p.rapidapi.com/exercises?limit=1000';
export const bodypartExcerciseUrl='https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=1000';



export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const text = await response.text();

        if (!text) {
            throw new Error('Empty response');
        }

        const data = JSON.parse(text);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};