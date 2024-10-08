class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}

        for i in range(len(nums)):
            delta = target - nums[i]

            if delta in hash_map:
                return hash_map[delta], i
                
            hash_map[nums[i]] = i
