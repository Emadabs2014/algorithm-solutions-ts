export function canJump(arr: number[]): boolean {
  let maxReach = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + arr[i]);
    
    if (maxReach >= arr.length - 1) {
      return true;
    }
  }

  return true;
}