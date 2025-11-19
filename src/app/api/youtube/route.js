export async function GET() {
  const res = await fetch("https://72t09sg9-3000.inc1.devtunnels.ms/api/youtube", {
    cache: "no-store",
  });

  const json = await res.json();
  return Response.json(json);
}


