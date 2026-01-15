import { merge } from '../src/merge';

describe('merge function', () => {
    test('should merge three sorted arrays correctly', () => {
        const c1 = [10, 5, 1]; // Descending
        const c2 = [2, 4, 8];  // Ascending
        const c3 = [3, 6, 9];  // Ascending
        // Expected: 1, 2, 3, 4, 5, 6, 8, 9, 10
        expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10]);
    });

    test('should handle empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([3, 1], [], [2])).toEqual([1, 2, 3]);
    });

    test('should handle arrays with negative numbers', () => {
        const c1 = [-1, -5];
        const c2 = [-10, 0];
        const c3 = [5];
        // -10, -5, -1, 0, 5
        expect(merge(c1, c2, c3)).toEqual([-10, -5, -1, 0, 5]);
    });

    test('should handle arrays of different lengths', () => {
        const c1 = [100, 1];
        const c2 = [2, 3, 4, 5, 6];
        const c3 = [50];
        expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 50, 100]);
    });

    test('should handle duplicate values', () => {
        const c1 = [5, 5, 1];
        const c2 = [1, 5];
        const c3 = [5];
        expect(merge(c1, c2, c3)).toEqual([1, 1, 5, 5, 5, 5]);
    });
});
