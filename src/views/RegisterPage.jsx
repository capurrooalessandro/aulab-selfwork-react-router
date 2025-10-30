export default function RegisterPage() {
    return (
        <section className="form-container">
            <h1 className="register-title">Register page</h1>
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
                        <label htmlFor="passwordInsert" className="form-label">Insert your password</label>
						<input
							type="password"
							className="form-control"
							id="passwordInsert"
							name="password"
							placeholder="Insert your password"
						/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="passwordConfirm" className="form-label">Confirm your password</label>
						<input
							type="password"
							className="form-control"
							id="passwordConfirm"
							name="password"
							placeholder="Confirm your password"
						/>
                    </div>
                </div>
            </form>
        </section>
    )
}