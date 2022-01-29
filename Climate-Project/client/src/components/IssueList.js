import Issues from "./Issues";

export default function IssueList({issue}){
    return(
        <div>
            { issue.map(issues=> <Issues {...issues} key={issues._id}/>) }
        </div>
    )
}