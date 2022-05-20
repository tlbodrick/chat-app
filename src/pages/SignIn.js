function SignIn() {
    return (
        <div className="border rounded">
            <p className="font-bold">Join thousands of learners from around the world</p>
            <p>Master web development by making real-life projects. There are multiple paths for you to choose.</p>

            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Start chatting now</button>
            </form>

            <div>
                <p>or continue with Google</p>
                {/* Google icon here */}
                <p>Already a member?
                Login
                </p>
            </div>

        </div>
    )
}

export default SignIn
