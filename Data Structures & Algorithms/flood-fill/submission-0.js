class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let value = image[sr][sc];
        let visited = new Set();
        function helper(i, j) {
            let key = `${i},${j}`;
            if (visited.has(key)) return;
            visited.add(key);
            if (i < 0 || i == image.length) return;
            if (j < 0 || j == image[0].length) return;
            if (image[i][j] != value) return;
            image[i][j] = color;
            helper(i - 1, j);
            helper(i + 1, j);
            helper(i, j - 1);
            helper(i, j + 1);
        }
        helper(sr, sc);
        return image;
    }
}
