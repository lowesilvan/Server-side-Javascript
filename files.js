const fs = require('fs')

// Reading files
fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log('error reading file')
    }
    console.log(data.toString())
})


// Writing files

fs.writeFile("./docs/blog.txt", "hello, world", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blog2.txt", "hello, again", () => {
  console.log("file was written");
});

// directories

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files

if (fs.existsSync("./docs/deletme.txt")) {
  fs.unlink("./docs/deletme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
} console.log('file does not exist')