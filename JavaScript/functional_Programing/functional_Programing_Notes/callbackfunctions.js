var exampleFunction =  (message) => {
    console.log(message);
};

exampleFunction("Hello from exampleFunction");

function parentFunction(callback) {
    callback("information from the parent function");
}

parentFunction(exampleFunction);


parentFunction(function (message) {
    console.log(message);
});



