/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-hot-toast";

const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const { verifyEmail, error, isLoading, user } = useAuthStore();

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const digitOnly = pastedText.replace(/\D/g, "").slice(0, 6);

    if (digitOnly.length > 0) {
      const newCode = [...code];
      for (let i = 0; i < 6; i++) {
        newCode[i] = digitOnly[i] || "";
      }
      setCode(newCode);

      const lastFilledIndex = newCode.findIndex((digit) => digit === "");
      const focusIndex = lastFilledIndex === -1 ? 5 : lastFilledIndex;
      setTimeout(() => inputRefs.current[focusIndex]?.focus(), 0);
    }
  };

  const handleChange = (index, value) => {
    const digitOnly = value.replace(/\D/g, "");
    const newCode = [...code];

    if (digitOnly.length === 1) {
      newCode[index] = digitOnly;
      setCode(newCode);

      // Focus the next input
      if (index < 5) {
        setTimeout(() => inputRefs.current[index + 1]?.focus(), 0);
      }
    } else if (digitOnly.length === 0) {
      newCode[index] = "";
      setCode(newCode);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
        inputRefs.current[index - 1].focus();
      } else if (code[index]) {
        // Clear current input on backspace
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    }
  };

  const handleInputClick = (index) => {
    if (!code[index] && index > 0 && !code[index - 1]) {
      const firstEmptyIndex = code.findIndex((digit) => digit === "");
      if (firstEmptyIndex !== -1) {
        inputRefs.current[firstEmptyIndex].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error("User not found");
      return;
    }
    const verificationCode = code.join("");
    console.log(`Verification code submitted: ${verificationCode}`);
    try {
      await verifyEmail(verificationCode);
      navigate("/");
      toast.success("Email verified successfully!");
    } catch (error) {
      console.error("Email verification error:", error);
    }
  };

  //Auto submit when all digits are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className="max-w-md w-full bg-gray-800/50 backdrop:filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/50 backdrop:filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-linear-to-r from-blue-400 to-slate-400 text-transparent bg-clip-text">
          Verify Your Email
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Enter the 6-digit code sent to your email address...
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onClick={() => handleInputClick(index)}
                onPaste={handlePaste}
                className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            ))}
          </div>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 font-semibold mb-2"
            >
              {error}
            </motion.p>
          )}
          <motion.button
            className="mt-5 w-full bg-linear-to-r from-blue-700 to-blue-900 text-white font-bold py-3 cursor-pointer px-4 rounded-lg shadow-lg hover:from-blue-800 hover:to-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading || code.some((digit) => !digit)}
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailVerification;
