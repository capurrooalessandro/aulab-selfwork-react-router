import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function LoginPage() {
	const { register, handleSubmit, formState:{errors} } = useForm();
	const navigateTo = useNavigate();
	const { loginUser } = useContext(UserContext);

	const logIn = (data) => {
		loginUser(data);
		navigateTo("/");
	}

	return (
		<section className="flex justify-center items-center flex-col h-screen">
			<header className="h-30">
				<h1 className="lg:text-6xl text-4xl font-[650]">Login page</h1>
			</header>
			<form onSubmit={handleSubmit(logIn)}>
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box lg:w-lg md:w-md w-[76vw] border p-4">
					<legend className="fieldset-legend text-[16px]">Login</legend>
					<label className="floating-label mb-1">
						<span>Email</span>
						<input
							type="email"
							className="input input-lg lg:w-lg md:w-md w-[76vw]"
							placeholder="johndoe123@email.com"
							{ 
								...register("email", { required: "Email field is required!", maxLength: 50 })
							}
						/>
						{	
							errors.email && (
								<p className="mt-3 p-2 bg-error rounded-box text-[13.5px]">
									{errors.email.message}
								</p>
							)
						}
					</label>
					<label className="floating-label">
						<span>Password</span>
						<input
							type="password"
							className="input input-lg lg:w-lg md:w-md w-[76vw]"
							placeholder="Insert your password"
							{ 
								...register("password", { required: "Password field is required!", maxLength: 50 })
							}
						/>
						{				
							errors.password && (
								<p className="mt-3 p-2 bg-error rounded-box text-[13.5px]">
									{errors.password.message}
								</p>
							)
						}
					</label>
					<hr className="my-2.5 border-zinc-500" />
					<button type="submit" className="btn btn-primary">Click to Login!</button>
				</fieldset>
			</form>
		</section>
	)
}