export default function capitalize(text) {
  return text.replace(/^\w/, (letter) => letter.toUpperCase());
}
