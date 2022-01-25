import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export default function Profile(){
    const {user} = useContext(UserContext)
    
    return(
        <>
            <h1>Welcome {user.user}</h1>
        </>
    )
}