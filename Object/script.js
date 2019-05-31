let obj = {
    "one": "perviy",
    "two": "super",
    "three four": "VoVo",
    hi: "hello",
    "lol": function () {
        return this["three four"];
    }
}

let o = "two";
console.log(obj);
console.log(obj.lol());

console.log(obj[o]);

let obj_clone = {};
for (let key in obj) {
    obj_clone[key] = obj[key];
}
obj_clone.new = "new";
console.log(obj_clone);