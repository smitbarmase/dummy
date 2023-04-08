export async function GET() {
  const res = await fetch("https://dummy-orcin.vercel.app/api", {
    next: { revalidate: 60 },
  });
  return new Response(res.body);
}

export const dynamic = "force-dynamic";
