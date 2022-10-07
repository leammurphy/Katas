# class Solution:
#     def runningSum(self, nums: List[int]) -> List[int]:
#         preSumArr = []
#         for i in range(len(nums)):
#             preSumArr.append(sum(nums[: i + 1]))
#         return preSumArr

def runningSum(nums):
    preSumArr = []
    for i in range(len(nums)):
        preSumArr.append(sum(nums[: i + 1]))
    return preSumArr

testArr = [1, 2, 3, 4]
print(runningSum(testArr))
# ans: [1, 3, 6, 10]

