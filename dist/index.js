"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const documentationRoutes_1 = __importDefault(require("./routes/documentationRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// mongoose.connect(`mongodb+srv://vercel-admin-user-676834cadc6de46ef028bac1:kfzmCWFGbyb0tZRQ@cluster0.bdm0t.mongodb.net/greenWorldDatabase`);
mongoose_1.default.connect(process.env.MONGODB_URI || '');
app.use(userRoutes_1.default);
app.use(documentationRoutes_1.default);
app.listen(port, () => console.log(`Server is running on port ${port}...`));
