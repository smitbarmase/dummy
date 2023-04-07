export async function GET() {
  const url = "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata";
  const res = await fetch(url, {
    next: { revalidate: 120 },
  });
  const data = await res.json();

  return new Response(data.dateTime);
}
