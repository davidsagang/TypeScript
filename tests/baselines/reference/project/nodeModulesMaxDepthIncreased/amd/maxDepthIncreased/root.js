define(["require", "exports", "m1"], function (require, exports, m1) {
    "use strict";
    m1.f1("test");
    m1.f2.a = 10;
    m1.f2.person.age = "10"; // Error: Should be number
});
