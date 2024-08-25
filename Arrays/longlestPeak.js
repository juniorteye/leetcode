function longestPeak(array) {
    let longestPeakLength = 0;
    
    for (let i = 1; i < array.length - 1; i++) {
        const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
        if (!isPeak) continue;
        
        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--;
        }
        
        let rightIdx = i + 2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++;
        }
        const currentPeakLength = rightIdx - leftIdx - 1;
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    }
    return longestPeakLength;
}
