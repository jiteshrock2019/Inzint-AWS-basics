const Responses = require("./API_Responses");
exports.handler = async (event) => {
  console.log("event", event);

  if (!event.patahParameters || !event.patahParameters.ID) {
    //Failed without an ID
    return Responses._400({ message: "missing the ID form the path" });
  }

  let ID = event.patahParameters.ID;

  if (data[ID]) {
    //return data
    return Responses._200(data[id]);
  }

  //failed as ID not in the data
  return Responses._400({ message: "no ID in data " });
};

const data = {
  1234: { name: "Ram", age: 34, job: "UI-UX" },
  2345: { name: "Shyam", age: 24, job: "Angular Developer" },
  3456: { name: "Mohan", age: 67, job: "React Developer" },
};
