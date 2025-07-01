import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

// Simple field validation
function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true;
}

const usesignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const isValid = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!isValid) return;

        setLoading(true);
        try {
            const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
            const res = await fetch(`${API_BASE}/api/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
                credentials: "include", // ✅ include cookies from backend
            });

            const text = await res.text(); // ✅ safely read raw response
            let data;

            try {
                data = JSON.parse(text);
            } catch (err) {
                throw new Error("Invalid server response");
            }

            if (!res.ok) {
                throw new Error(data.error || "Signup failed");
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Signup successful");
        } catch (error) {
            toast.error(error.message || "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default usesignup;
