//noinspection JSCheckFunctionSignatures
task("default", [], function(){
    console.log("Default");
});

desc("Example!");
task("example",["dependency"], function(){
    console.log("example task");
});

task("dependency", function(){
    console.log("dependency");
});