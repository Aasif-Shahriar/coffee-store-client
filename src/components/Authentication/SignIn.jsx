import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  console.log(signInUser);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    // const formData = new FormData(form)
    // const userData = Object.fromEntries(formData.entries())

    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password);

    signInUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);

        const signInInfo = {
            email,
            lastSignInTime: user?.metadata?.lastSignInTime
        }

        //update last signIn into the database
        fetch('http://localhost:3000/users',{
            method: "PATCH",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(signInInfo)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        })


      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            autoComplete="current-password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
