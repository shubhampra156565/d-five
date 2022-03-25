import React from "react";
import '../Login/login.css';



class Login extends React.Component {

    // const [email, setEmail] = useState([]);
    // const [ password , setPassword ] = useState([]);


    handlChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }
    handlSubmit = (e) => {
        
        e.preventDefault();
        
        
        this.props.isLog(true)
        



    }
    render() {
        return (

            <div className="loginwindow">


                <div>
                    <form onSubmit={this.handlSubmit}>

                        <input type='email'
                            name="email"
                            placeholder="email...."
                            autoComplete="off"
                            required onChange={this.handlChange}
                            

                        />


                        <input type='password'
                            name="pwd"
                            placeholder="pwd...."
                            autoComplete="off"
                            required onChange={this.handlChange}
                         />

                        <button onSubmit={this.handlSubmit}>Login</button>
                    </form>
                </div>
            </div>

        )
    }
}
export default Login;