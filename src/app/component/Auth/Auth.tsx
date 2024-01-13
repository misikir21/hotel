import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const inputStyle =
  "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none";
const Auth = () => {
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70] mx-auto">
        <div className="flex mb-8  flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text" />
            |
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
            |
            <BsFacebook className="ml-3 text-4xl cursor-pointer" />
            |
            <FaTwitter className="ml-3 text-4xl cursor-pointer" />
            |
            <AiFillInstagram className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>
        <form className="space-y-4 md:space-y-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@company.com"
            required
            className={inputStyle}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            minLength={6}
            className={inputStyle}
          />

          <input
            type="text"
            name="name"
            id="name"
            placeholder="john doe"
            required
            className={inputStyle}
          />
          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py2.5 text-center"
          >
            Sign Up
          </button>
        </form>
        <button className="text-blue-700 underline">Log In</button>
      </div>
    </section>
  );
};
export default Auth;
