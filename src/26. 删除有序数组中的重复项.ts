// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function removeDuplicates(nums: number[]): number {
    // 双指针，left, right
    // 如果 left === right, right++
    // 如果 left !== right, nums[left + 1] = nums[right], left++, right++
    let left = 0, right = 1
    while (right < nums.length - 1) {
        if (nums[left] === nums[right]) right++;
        else {
            nums[left + 1] = nums[right]
            left++;
            right++
        }
        console.log("🚀 ~ right:", right)
        console.log("🚀 ~ left:", left)
    }
    return left
};
// #endregion

const nums = [1, 1, 2]
removeDuplicates(nums)