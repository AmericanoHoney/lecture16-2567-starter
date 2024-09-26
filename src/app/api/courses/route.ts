import { NextRequest , NextResponse } from "next/server"
//GET : "http://localhost:3000/api/courses
export const GET = async (request:NextRequest) => {
    return NextResponse.json({
        message: "Hello world"
    })
}