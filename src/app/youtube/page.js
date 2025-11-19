async function getVideos() {
  const res = await fetch("https://72t09sg9-3000.inc1.devtunnels.ms/api/youtube", {
    cache: "no-store",
  });

  const json = await res.json();
  return json.data;
}

export default async function YouTubePage() {
  const videos = await getVideos();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          className="border rounded-lg shadow hover:shadow-lg transition p-3"
        >
          <img
            src={video.thumbnail}
            className="rounded-md w-full mb-2"
            alt={video.title}
          />

          <h2 className="font-semibold text-sm">{video.title}</h2>

          <p className="text-xs text-gray-500">
            {new Date(video.publishedAt).toLocaleDateString()}
          </p>
        </a>
      ))}
    </div>
  );
}