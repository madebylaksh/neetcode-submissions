class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const orig = image[sr][sc];
        if (orig === color) return image;
        const m = image.length,
            n = image[0].length;
        const dfs = (r, c) => {
            if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== orig) return;
            image[r][c] = color;
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };
        dfs(sr, sc);
        return image;
    }
}
