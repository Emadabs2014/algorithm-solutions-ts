function largestRectangleArea(heights: number[]): number {
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

export function maximalRectangle(mat: string[][]): number {
  if (mat.length === 0 || mat[0].length === 0) return 0;

  const rows = mat.length;
  const cols = mat[0].length;
  const heights = new Array(cols).fill(0);
  let maxArea = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === '1') {
        heights[j] += 1;
      } else {
        heights[j] = 0;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}