function getMiddle(s) {
  let l = s.length;
  let subStrLength = 0;
  let subStrStart = 0;
  let subStrEnd = 0;

  if(l %2 == 1) {
    subStrStart = s.length / 2;
    subStrLength = 1;
  } else { 
    subStrStart = (s.length / 2 )- 1;
    subStrLength = 2;
  }
  subStrEnd = subStrStart + subStrLength;
  return s.substring(subStrStart, subStrEnd)
}

