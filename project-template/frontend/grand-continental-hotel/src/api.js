const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        });
        return await response.json();
    }
    catch (error) {
    throw new Error("Failed to register user.");
    }
};
