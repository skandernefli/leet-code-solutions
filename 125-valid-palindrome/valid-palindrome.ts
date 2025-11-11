function isPalindrome(s: string): boolean {
    return s.toLowerCase().replace(/[^a-z0-9]/gi, "") === s.toLowerCase().replace(/[^a-z0-9]/gi, "").split('').reverse().join('');

}