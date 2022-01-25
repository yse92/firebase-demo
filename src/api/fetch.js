import auth from '@react-native-firebase/auth';
import axios from 'axios'

export const Auth = async () => {
    try{
        const resp = await auth().signInAnonymously()
        console.log('User signed in anonymously !!!');
    }catch(error){
        if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
    }
}

export const SearchUser = async (userName) => {
    try{
        const ROOT_URL = `https://api.github.com/search/users?q=${userName}`;
        const resp = await axios.get(ROOT_URL);
        console.log(`fetch api : User ${userName} has been found successfully !!!`);
        return resp;
    }catch(error){
        if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
    }
}

