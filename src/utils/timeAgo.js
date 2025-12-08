 export function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const diff = (now - past) / 1000;

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 172800) return "yesterday";

  return `${Math.floor(diff / 86400)} days ago`;
}