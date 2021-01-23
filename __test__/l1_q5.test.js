import { TestScheduler } from "jest"
import Pilha from "../src/Javascript/Pilha.js"

test("Teste de Decimal", ()=>{
    let test = new Pilha(8);

    expect(test.toBinary(10).toString()).toBe("[1010]");
})