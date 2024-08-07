const fs = require('node:fs');
const replacethis = 'ashu';
const replacewith = 'john';
const preview = true;
try {
    const data = fs.readdir("data", (err, data) => {

        console.log(data);

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile = "data/" + item.replaceAll(replacethis, replacewith)
            if (!preview) {
                fs.rename("data/" + item, newFile, () => {
                    console.log("Rename Success");
                })
            }
            else {
                if ("data/" + item != newFile)
                    console.log("data/" + item + " will be rename to" + newFile)
            }
        }
    });
} catch (err) {
    console.error(err);
}
