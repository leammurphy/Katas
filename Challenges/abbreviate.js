function abbrevName(name){
  let separatedName = name.split(" ");
  let initials = []
  separatedName.forEach((x) => {
    initials.push(x[0].toUpperCase())
  })
  return initials.join(".")
}