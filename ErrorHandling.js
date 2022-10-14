let studentData = `[
    {
        "name": "Muhammad Naeem",
        "age": 23,
        "class": "BSCS"
    },
    {
        "name": "Muhammad Umer",
        "age": 19,
        "class": "BSCS"
    }
]`;

let std = JSON.parse(studentData);

try {
    console.log(std[0].name);
  if (!std.fname) {
    throw new Error("Data is not complete!");
  }
} catch (error) {
  console.log(error.message);
}
