class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const cars = Array.from({ length: n }, (_, i) => [
            position[i],
            (target - position[i]) / speed[i],
        ]);
        cars.sort((a, b) => b[0] - a[0]);

        let max = -Infinity;
        let fleets = 0;
        for (const [, time] of cars) {
            if (time > max) {
                fleets++;
                max = time;
            }
        }
        return fleets;
    }
}
