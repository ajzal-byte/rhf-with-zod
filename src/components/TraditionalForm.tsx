import React, { useState } from "react";

export default function TraditionalForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrors([])
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Password and confirm password must match"]);
      setIsSubmitting(false);
      return;
    }

    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li
              key={error}
              className="bg-red-100 text-red-500 px-4 py-2 rounded"
            >
              {error}
            </li>
          ))}
        </ul>
      )}
      {isSubmitted && (
          <div className="bg-green-100 text-green-500 px-4 py-2 rounded">
            Your form is submitted
          </div>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        required
        placeholder="Confirm password"
        className="px-4 py-2 rounded"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
