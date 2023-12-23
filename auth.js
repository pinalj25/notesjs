export const checkRegister=async(req,res,next)=>{
try {
    const {username,email,password,confirmpassword}=req.body;
    if(!username || !email && !password || !confirmpassword) return res.status(404).json({status:404,message:"All fields are required."});
    if(password.length <8 || confirmpassword.length <8) return res.status(400).json({status:400,message:"Password should be 8 charactes long."});
    if(password!==confirmpassword) return res.status(400).json({status:400,message:"passwords do not match"});

    next();
} catch (error) {

    res.status(500).json({
        status:500,
        message:"Internal server error"
    })
}
}