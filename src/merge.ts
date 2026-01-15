
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let p1 = collection_1.length - 1; // collection_1 is max to min, so smallest is at end
    let p2 = 0; // collection_2 is min to max
    let p3 = 0; // collection_3 is min to max

    while (p1 >= 0 || p2 < collection_2.length || p3 < collection_3.length) {
        const val1 = p1 >= 0 ? collection_1[p1] : Infinity;
        const val2 = p2 < collection_2.length ? collection_2[p2] : Infinity;
        const val3 = p3 < collection_3.length ? collection_3[p3] : Infinity;

        const minVal = Math.min(val1, val2, val3);

        result.push(minVal);

        if (minVal === val1) {
            p1--;
        } else if (minVal === val2) {
            p2++;
        } else {
            p3++;
        }
    }

    return result;
}
