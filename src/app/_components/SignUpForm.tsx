"use client";

import { useState } from "react";

export default function SignUpForm({ title }: { title: string }) {
  const [firstName, setFirstName] = useState("");
  const [] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  function validateEmail(email: string) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setSubmitted(true);
    console.log({ firstName, email });
  }

  return (
    <section
      className={`w-full max-w-md bg-white dark:bg-zinc-900 rounded-lg shadow p-6`}
    >
      <h3 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-blue-100 text-center">
        {title}
      </h3>
      {submitted ? (
        <div className="text-green-700 dark:text-green-300 text-center">
          Thank you for signing up!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-left">
            <span className="mb-1 font-medium text-blue-900 dark:text-blue-100">
              First Name
            </span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-zinc-800 dark:text-blue-100"
              placeholder="Your first name"
            />
          </label>

          <label className="flex flex-col text-left">
            <span className="mb-1 font-medium text-blue-900 dark:text-blue-100">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              required
              className={`border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-zinc-800 dark:text-blue-100 ${emailError ? "border-red-500" : ""}`}
              placeholder="you@example.com"
            />
            {emailError && (
              <span className="text-red-600 dark:text-red-400 text-sm mt-1">
                {emailError}
              </span>
            )}
          </label>

          <label className="flex flex-col text-left">
            <span className="mb-1 font-medium text-blue-900 dark:text-blue-100">
              How would you like to be involved?
            </span>
            <select
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-zinc-800 dark:text-blue-100"
            >
              <option value="">- Select an option -</option>
              <option value="singer">Singer</option>
              <option value="musician">Musician</option>
              <option value="organizer">Organizer</option>
            </select>
          </label>

          <button
            type="submit"
            className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>
      )}
    </section>
  );
}
