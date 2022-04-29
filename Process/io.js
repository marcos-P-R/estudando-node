process.stdout.write("Ola seja bem vindo, diga-me seu nome \n");
process.stdin.on('readable', () => {
    let imput = process.stdin.read();
    if(imput !== null){
        process.stdout.write(imput);
    }
})