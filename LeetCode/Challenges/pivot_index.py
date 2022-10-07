class Solution(object):
    def pivotIndex(self, nums):
        total_sum = sum(nums)
        left_sum = 0
        right_sum = 0
        for i, curr_num in enumerate(nums):  
            right_sum = total_sum - left_sum - curr_num
            if left_sum == right_sum:
                return i
            left_sum += curr_num
        return -1