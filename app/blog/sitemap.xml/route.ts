export async function GET() {
  const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return new Response(data.datetime);
}
