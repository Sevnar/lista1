import Fracao from "../src/Javascript/Fracao.js";

test("Frações:", ()=> {
    let fracao = new Fracao(2, 4)

    expect(fracao.multiplier(fracao).toString()).toBe("4/16");

    expect(fracao.divider(fracao).toString()).toBe("8/8");
})