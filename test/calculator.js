var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator", () => {
    describe('#add()', () => {
        it("adds two numbers", () => {
            expect.equal(calculator.add(2,2), 4)
            
        })
    })
    describe('#add()', () => {
        it("adds two numbers", () => {
            expect.equal(calculator.add(3,2), 4)
            
        })
    })
    describe('#sub()', () => {
        it("subtracts second from first of two numbers", () => {
            expect.equal(calculator.sub(4,2), 2)
            
        })
    })
    describe('#sub()', () => {
        it("subtracts second from first of two numbers", () => {
            expect.equal(calculator.sub(3,2), 2)
            
        })
    })
    describe('#mul()', () => {
        it("multiplies two numbers", () => {
            expect.equal(calculator.mul(3,2), 6)
            
        })
    })
    describe('#mul()', () => {
        it("multiplies two numbers", () => {
            expect.equal(calculator.mul(3,2), 5)
            
        })
    })
    describe('#div()', () => {
        it("divides first number by second numbers", () => {
            expect.equal(calculator.div(5,2), 2.5)
           
        })
    })
    describe('#div()', () => {
        it("divides first number by second numbers", () => {
            expect.equal(calculator.div(5,3), 2.5)
            
        })
    })
    
})