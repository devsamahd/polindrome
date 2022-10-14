function palindrome(string) {
  const str = string.toLowerCase()
  const regex = /([a-z]?[0-9]?)/gi
  const newstr = str.match(regex)
  const com1 = newstr.join("")
  const cc = newstr.reverse()
  const com2 = cc.join("")
  if(com1 == com2){
    return true;
  }
  return false
  
}

palindrome("eye");
