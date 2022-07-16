const { unlink } = require("fs");

unlink("./HelloWorld.txt", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Successfully deleted the file that you made");
    }
});

