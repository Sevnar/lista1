import Pilha from "../src/Javascript/Pilha.js"

test("Q4 - Trocar fundo com topo", ()=>{
    let test = new Pilha(13);

    test.push(1);
    test.push(2);
    test.push(3);
    test.push(4);
    test.push(5);
    

    expect(test.trocarTopo().toString()).toBe("[52341]");

})