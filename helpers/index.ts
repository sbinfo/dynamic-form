export function vowelCount(str: string): number {
    const vowelRegex = /[aeiou]/gi;
    const strMatches = str.match(vowelRegex);

    if (strMatches) {
        return strMatches.length;
    } else {
        return 0;
    }
}
