// Unit tests for the helloWorld function
//decribe takes 2 parameters; 1st is string, 2nd is an anonymous function
// this one function has several calls known as the "it" function
// "it" function includes a message, title of the specification(spec), also takes function() as a second parameter
// everything within the it function is known as the acceptance criteria
// the ones with the "expect" are expectations // 2 parts an assertion and a matcher
//
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!"', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!"', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

});