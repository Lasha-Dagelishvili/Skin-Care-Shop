import { NextResponse } from "next/server";
import pool from "@/lib/connection";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");
    const productName = data.get("title");
    const description = data.get("description");
    const price = data.get("price");

    if (!file || !productName || !description || !price) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const query = `
      INSERT INTO products (productName, price, description, image)
      VALUES (?, ?, ?, ?,)
    `;
    const values = [productName, price, description, buffer];

    const [result] = await pool.query(query, values);

    return NextResponse.json(
      { success: true, id: result.insertId },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
