const os = require('os')

process.stdin.setEncoding('utf8');
console.log('Ola seja bem vindo');
console.log(`Qual informação deseja
1 - INFO DE CPU
2 - INFO DE MEMORIA
3 - INFO DE SISTEMAS`);
process.stdin.on('readable', () => {
    let info = process.stdin.read();
    validacao(info);
});

const validacao = (input) => {
    switch(input !== null) {
        case input == 1:
            let cpu_s = os.cpus();
            cpu_s.forEach(e => {
                console.log(e);
            });
            break;
        case input == 2:
            let mem_m = os.freemem();
            console.log(mem_m);
            break;
        case input == 3:

    }
}