/** @format */

export async function GET() {
  try {
    const enabled = Boolean(
      process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET,
    );
    return new Response(JSON.stringify({ google: enabled }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ google: false }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
