import { NextRequest, NextResponse } from "next/server";

//cretae a post route 
export const POST = async (req:NextRequest)=>{
    try{
        const body = await req.json();
        const {username,password} = body;
        console.log(username,password)
        //validating on server side 
        //if username already exits throw error
        //else create a user and return the success msg
        return NextResponse.json({msg:"Signup successful"},{status:200})
    }catch(err){
        console.log(err)
        return NextResponse.json({msg:"something went wrong",err},{status:403})
    }
}  