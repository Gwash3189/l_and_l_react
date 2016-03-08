let count = 0;
export const seed = (num) => {
  count = num;
}

export default function id() {
  count = count + 1;
  return count;
}
