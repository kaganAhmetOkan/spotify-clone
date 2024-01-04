export default function getMinutes(seconds: number) {
  let mins = "00" + Math.floor(seconds / 60).toString();
  let secs = "00" + (seconds % 60).toString();

  mins = mins.slice(-2);
  secs = secs.slice(-2);

  return `${mins}:${secs}`;
};