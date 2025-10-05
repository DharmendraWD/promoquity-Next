export function extractYouTubeEmbedData(url) {
  try {
    const parsedUrl = new URL(url);
    let videoId = null;
    let playlistId = null;

    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1);
      playlistId = parsedUrl.searchParams.get("list");
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v");
        playlistId = parsedUrl.searchParams.get("list");
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1];
      }
    }

    return { videoId, playlistId };
  } catch (error) {
    console.error("Invalid YouTube URL:", url);
    return { videoId: null, playlistId: null };
  }
}
