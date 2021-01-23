import Pilha from "../src/Javascript/Pilha.js";

test("Q2 - Inversão de string com pilha", ()=>  {
    let test = new Pilha(7);

    test.push('A');
    test.push('B');
    test.push('A');
    test.push('C');
    test.push('A');
    test.push('X');
    test.push('I');
    
    
    expect(test.inverte().toString()).toBe("[IXACABA]")

})