export async function GET() {
  const url = "https://71be-103-214-63-146.ngrok-free.app";
  const res = await fetch(url, { next: { revalidate: 60 } });
  const data = await res.json();

  return new Response(data.dateTime);
}

export const dynamic = "force-dynamic";
