function Login() {
  return (
    <div className="static-page form-page">
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;