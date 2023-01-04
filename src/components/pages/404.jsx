import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <div style={{'marginTop': '20%'}}>
            <p style={{'textAlign': 'center', 'fontWeight':'bold', 'fontSize': '24px','color': '#fff'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'color': '#fff'}} to="/">
                Back to main page
            </Link>
        </div>
    )
}

export default Page404
