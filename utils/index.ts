export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArrayIndex<T>(arr: readonly T[]): T {
  return arr[getRandomInt(0, arr.length - 1)];
}
