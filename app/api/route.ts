export async function GET() {
  console.log("server called");
  return new Response(new Date().toLocaleString("en-US"));
}
