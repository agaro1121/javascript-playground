console.log(`stdout is writeable? ${process.stdout.writable}`);

process.stdout.write("Saluton");
process.stdout.write(" Mondo!");
process.stdout.write("!!!");