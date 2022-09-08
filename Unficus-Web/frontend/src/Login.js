import { Component } from "react";

class Login extends Component{

    
    render(){
        return(
            <div>
                <h2>Login</h2>
                <form>
                    <label>
                 UserName:
                    <input type="text" name="name" placeholder="enter email"/>
                     </label><br></br>
                     <label>
                 password:
                    <input type="text" name="password" placeholder="enter password" />
                     </label><br></br>
                    
                     <button color="primary" type="submit">Submit</button>;
                </form>
            </div>
        );
    }
}

export default Login;