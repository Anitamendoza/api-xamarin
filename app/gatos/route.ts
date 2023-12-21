import { NextResponse, NextRequest } from "next/server";
import {gatos} from "../mock/gatos"

export function GET(req: NextRequest){
    return NextResponse.json(gatos);
}