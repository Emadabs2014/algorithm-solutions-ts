export function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;
  let i = 0;

  while (i < heights.length) {
    if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
    } else {
      const top = stack.pop()!;
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = heights[top] * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  while (stack.length > 0) {
    const top = stack.pop()!;
    const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
    const area = heights[top] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}