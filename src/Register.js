function Register() {
  return (
    <div className="static-page form-page">
      <h2>Register</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;