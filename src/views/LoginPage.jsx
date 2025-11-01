export default function LoginPage() {
    return (
        <section className="form-container">
            <h1 className="login-title">Login page</h1>
            <form action="">
                <div className="form-group">
                    <div className="form-field">
                        <label htmlFor="email" className="form-label">Insert your email</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="johndoe123@email.com"
						/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							placeholder="Insert password"
						/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Click to Login!</button>
            </form>
        </section>
    )
}