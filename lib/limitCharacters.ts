export default function limitCharacters(str: string, limit: number) {
  if (str.length > limit) return str.slice(0, limit).concat("...");
  return str;
};