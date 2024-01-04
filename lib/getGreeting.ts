export default function getGreeting() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 4 && hour <= 11) return "Good morning";
  else if (hour > 11 && hour <= 17) return "Good afternoon";
  else return "Good evening";
};