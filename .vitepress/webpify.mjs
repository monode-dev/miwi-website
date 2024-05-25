import Sharp from "sharp";
import fs from "fs";

const picturesPath = "docs/component-pictures";
Promise.all(
  fs.readdirSync(picturesPath).map(async (file) => {
    if (fs.statSync(`${picturesPath}/${file}`).isDirectory()) return;
    if (file.endsWith(".webp")) return;
    const fileName = file.split(".")[0];
    await Sharp(`${picturesPath}/${file}`)
      .webp({ quality: 75 })
      .toFile(`${picturesPath}/${fileName}.webp`)
      .then(() => {
        console.log(`Converted ${file} to ${fileName}.webp`);
      });
  }),
)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
