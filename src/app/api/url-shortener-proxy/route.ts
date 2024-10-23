export const dynamic = "force-static";

export async function POST(req: Request) {
    const { url } = await req.json();

    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
    });
    const data = await response.json();

    return Response.json(data);
}
