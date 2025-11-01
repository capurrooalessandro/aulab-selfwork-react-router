import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router";

export default function RegisterPage() {
	const [registerEmail, setRegisterEmail] = useState();
	const [registerPassword, setRegisterPassword] = useState();

	const navigateTo = useNavigate();
	const { registerUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (registerEmail, registerPassword) {
			registerUser({email: registerEmail, password: registerPassword});
		}
		navigateTo("/");
	}

	const handleChange = (e) => {
		if (e.target.id === "email") {
			setRegisterEmail(e.target.value);
		} else if (e.target.id === "password") {
			setRegisterPassword(e.target.value);
		}
	}

    return (
        <section className="form-container">
            <h1 className="register-title">Register page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-field">
                        <label htmlFor="email" className="form-label">Insert your email</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="johndoe123@email.com"
							onChange={handleChange}
						/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label">Insert your password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							placeholder="Insert your password"
							onChange={handleChange}
						/>
                    </div>
                </div>
				<button type="submit" className="btn btn-primary">Click to Register!</button>
            </form>
        </section>
    )
}