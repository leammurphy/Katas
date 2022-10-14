# 205. Isomorphic Strings

2022-10-14 14:09:09

## Easy

**_Time: ~ 50min**

**The strings "abca" and "xyza" are isomorphic because we can replace all 'a's in "abca" with 'x's to get "xbca", and then replace all 'b's with 'y's to get "xyca". Then we can replace all 'c's with 'z's to get "xyza". return true if the two strings are isomorphic**

### details

The zip function takes two or more iterators and "zips" them together into one iterator. The new iterator pairs the first item from each passed iterator together then pairs the second item from each passed iterator together, and so on. If the passed iterators have different lengths, the new iterator will be the length of the shortest iterator.

A Set is a data type that can store a collection of data. This data can be accessed in any order and can be changed if needed. **There can be no duplicate data in a Set.**

SO for the example of *egg* and *add*, zipping them results in
(('e', 'a'), ('g', 'd'), ('g', 'd')). Sets cannot have duplicate data,  therefore when the set of z is initalized, the duplicate is discarded; resulting in a set that looks like {('e', 'a'), ('g', 'd')}. This also happens when initalizing a set on the strings *s* and *t*; which result in sets that look like {'g', 'e'}, {'d', 'a'} respectively. Since isomorphic words have the same list of character occurrences, the length of the sets of isomorphic words should be the same. 

I recommend breaking the solution down further and using print statements to better understand what is happening.

```py
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        z = zip(s, t)
        print(tuple(z))
        ss = set(s)
        ts = set(t)
        zs = set(z)
        print(ss,ts,zs)
        return len(ss) == len(ts) == len(zs)
```

Notes:

[zip](https://docs.python.org/3/library/functions.html#zip)

[zip playground](https://www.w3schools.com/python/trypython.asp?filename=demo_ref_zip)

[set](https://docs.python.org/3/library/functions.html#func-set)
