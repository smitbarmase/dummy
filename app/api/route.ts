export async function GET() {
  console.log("server called");
  return new Response(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      minute: "2-digit",
      second: "2-digit",
    })
  );
}

export const dynamic = "force-dynamic";
