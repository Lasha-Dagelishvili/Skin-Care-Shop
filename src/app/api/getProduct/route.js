import { NextResponse } from "next/server";
import pool from "@/lib/connection";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const offset = (page - 1) * limit;

    const sql = `SELECT * FROM products LIMIT ${limit} OFFSET ${offset}`;
    const [results] = await pool.query(sql);

    const products = results.map((result) => ({
      ...result,
      image: result.image ? result.image.toString("base64") : null,
    }));

    const totalResults = await pool.query(
      "SELECT COUNT(*) as count FROM products"
    );
    const totalProducts = totalResults[0][0]?.count || 0;

    return NextResponse.json({
      products,
      totalProducts,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
