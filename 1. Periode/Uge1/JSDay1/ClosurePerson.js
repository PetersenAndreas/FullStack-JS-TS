/*--------------------execise 2-------------------------*/
const makePerson = () => {
    let age = "NoAge";
    let name = "NoPerson";

    function changeAge(val) {
        age = val;
    }
    function changeName(val) {
        name = val
    }
    return {
      setAge: (valAge) => { changeAge(valAge); },
      setName: (valName) => { changeName(valName) },
      getInfo: () => `${name}, ${age}`
    };
  };

  module.exports = makePerson;