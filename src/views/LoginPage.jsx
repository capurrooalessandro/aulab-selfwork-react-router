export default function LoginPage() {
    return (
		<section className="flex justify-center items-center flex-col h-screen">
			<header className="h-30">
				<h1 className="lg:text-6xl text-4xl font-[650]">Login page</h1>
			</header>
			<form>
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box lg:w-lg md:w-md w-[76vw] border p-4">
					<legend className="fieldset-legend text-[16px]">Login</legend>
					<label className="floating-label mb-1">
						<span>Email</span>
						<input
							type="email"
							id="email"
							className="input input-lg lg:w-lg md:w-md w-[76vw]"
							placeholder="johndoe123@email.com"
						/>
					</label>
					<label className="floating-label">
						<span>Password</span>
						<input
							type="password"
							id="password"
							className="input input-lg lg:w-lg md:w-md w-[76vw]"
							placeholder="Insert your password"
						/>
					</label>
					<hr className="my-2.5 border-zinc-500" />
					<button type="submit" className="btn btn-primary">Click to Login!</button>
				</fieldset>
			</form>
		</section>
    )
}