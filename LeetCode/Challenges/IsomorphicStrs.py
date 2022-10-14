# Suggested Final Solution
class Solution:
    
    def transformString(self, s: str) -> str:
        index_mapping = {}
        new_str = []
        
        for i, char in enumerate(s):
            if char not in index_mapping:
                index_mapping[char] = i
            new_str.append(str(index_mapping[char]))
        return " ".join(new_str)
    def isIsomorphic(self, s: str, t: str) -> bool:
        return self.transformString(s) == self.transformString(t)

# My First Attempt
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        sd = {}
        td = {}
        
        for i in s:
            if i in sd:
                sd[i] += 1
            else:
                sd[i] = 1
        for i in t:
            if i in td:
                td[i] += 1
            else:
                td[i] = 1
        if [*sd.values()] == [*td.values()]:
            return True
        else:
            return False

# My Solution
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        sm = []
        tm = []
        
        for i in s:
            sm.append(s.index[i])
        for i in t:
            tm.append(t.index[i])
        if sm == tm:
            return True   
        return False

# Elegant solution
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        z = zip(s, t)
        return len(set(s)) == len(set(t)) == len(set(z))