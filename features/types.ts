const today = new Date();
today.getMonth();
// today.noProperty; <- error

const person = {
  age: 20,
};
// person.noProperty; <- error

class Color {

}
const red = new Color();
// red.noProperty; <- error