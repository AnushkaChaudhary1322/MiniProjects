export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password) {
            return res.status(401).json({
                message: "Something is missing",
                success: false,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}