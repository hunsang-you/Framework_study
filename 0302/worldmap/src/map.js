"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectMatchSnapshot = void 0;
const chart_js_1 = require("chart.js");
const jest_image_snapshot_1 = require("jest-image-snapshot");
require("canvas-5-polyfill");
expect.extend({ toMatchImageSnapshot: jest_image_snapshot_1.toMatchImageSnapshot });
function toBuffer(canvas) {
    return new Promise((resolve) => {
        canvas.toBlob((b) => {
            const file = new FileReader();
            file.onload = () => resolve(Buffer.from(file.result));
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            file.readAsArrayBuffer(b);
        });
    });
}
function expectMatchSnapshot(canvas) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = yield toBuffer(canvas);
        expect(image).toMatchImageSnapshot();
    });
}
exports.expectMatchSnapshot = expectMatchSnapshot;
function createChart(config, width = 800, height = 600) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    Object.assign(chart_js_1.defaults.font, { family: "Courier New" });
    // defaults.color = 'transparent';
    // eslint-disable-next-line no-param-reassign
    config.options = Object.assign({ responsive: false, animation: {
            duration: 1,
        }, plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        } }, (config.options || {}));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = canvas.getContext("2d");
    const t = new chart_js_1.Chart(ctx, config);
    return {
        chart: t,
        canvas,
        ctx,
        toMatchImageSnapshot(options) {
            return __awaiter(this, void 0, void 0, function* () {
                yield new Promise((resolve) => setTimeout(resolve, 100));
                const image = yield toBuffer(canvas);
                expect(image).toMatchImageSnapshot(options);
            });
        },
    };
}
exports.default = createChart;
