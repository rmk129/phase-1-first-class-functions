function receivesAFunction (thing) {
    return thing();
}
receivesAFunction(function Spy() {return 4 + 5});

function returnsANamedFunction() {
    return function Hello(){
        return 4 + 5;
    }
}

function returnsAnAnonymousFunction() {
        return function(){

        }
}