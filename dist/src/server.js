"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Attlas Authorization Rehearsal');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Attlas Authorization Rehearsal on https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map