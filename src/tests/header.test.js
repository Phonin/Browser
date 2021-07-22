"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var header_1 = require("../src/components/header");
var enzyme_1 = require("enzyme");
describe('Initial Test of the Header', function () {
    test('Header renders 3 nav items', function () {
        var context = enzyme_1.shallow(<header_1.default />);
        expect(context.find('h1').text()).toBe('Preact App');
        expect(context.find('Link').length).toBe(3);
    });
});
//# sourceMappingURL=/media/nora/SSD%202/phonin/browser/tests/header.test.js.map