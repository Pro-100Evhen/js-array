// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  let findByName = people.find((person) => person.name === name);
  return findByName;
}

module.exports = findByName;