process.stdout.write("Ola seja bem vindo, qual seu nome? \n");
process.stdin.on('data', data => {
    process.stdout.write(`Seu nome é ${data.toString()}`);
    process.exit();
});