export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const totalLength = collection_1.length + collection_2.length + collection_3.length;
    const result: number[] = new Array(totalLength);
    
    let p1 = collection_1.length - 1;
    let p2 = 0;
    let p3 = 0;

    for (let i = 0; i < totalLength; i++) {
        const v1 = p1 >= 0 ? collection_1[p1] : Infinity;
        const v2 = p2 < collection_2.length ? collection_2[p2] : Infinity;
        const v3 = p3 < collection_3.length ? collection_3[p3] : Infinity;

        // Manual comparison is often faster than Math.min in tight loops
        if (v1 <= v2 && v1 <= v3) {
            result[i] = v1;
            p1--;
        } else if (v2 <= v1 && v2 <= v3) {
            result[i] = v2;
            p2++;
        } else {
            result[i] = v3;
            p3++;
        }
    }

    return result;
}