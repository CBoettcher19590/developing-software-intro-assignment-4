import sayHello from '../src/modules/yargs';
import yargs, { Arguments, Argv } from "yargs";
import { expect } from 'chai';
import 'mocha';


describe("Hello yargs Function", () => {
    it("should return Hello " + yargs.argv.$0, () => {
        const restult = sayHello(yargs);
        expect(restult).to.equal(sayHello(yargs))
    });
});
