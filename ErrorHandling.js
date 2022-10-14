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
const m = 23;

try {
    m = 3;
    // console.log(std[0].name);
  if (!std.fname) {
    throw new Error("Data is not complete");
  }
} catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Reference Error Found!");
    } else if (error instanceof TypeError) {
      console.log("Type Error Found!");
    } else {
      console.log(`Other Error: ${error.message}!`);
    }
//   console.log(error.message);
} finally {
    console.log("Finally this the Error!");
}
