import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueForm from './IssueForm';
import IssueList from './IssueList';

export default function Profile(){
    const {user: user, addIssue, issue, logout} = useContext(UserContext)
    return(
        <>
            <h1>Welcome {user.user}</h1>
            <button onClick={ logout }>Logout</button>
            <h3>Add A Todo</h3>
            <IssueForm addIssue={addIssue}/>

            <h3>Your Issues</h3>
            <IssueList issue={issue}/>
        </>
    )
}