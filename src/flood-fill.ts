export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] {
  const originalColor = image[sr][sc];

  if (originalColor === newColor) {
    return image;
  }

  const rows = image.length;
  const cols = image[0].length;

  // sport function
  function dfs(r: number, c: number): void {
    if (
      r >= 0 &&
      r < rows &&
      c >= 0 &&
      c < cols &&
      image[r][c] === originalColor
    ) {
      image[r][c] = newColor;

      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    }
  }

  dfs(sr, sc);

  return image;
}
