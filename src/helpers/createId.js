export default function createId(id) {
  let createdId = '#';
  for (let i = 0; i < 3 - id.toString().length; i++) {
    createdId += '0';
  }
  createdId += id;

  return createdId;
}
