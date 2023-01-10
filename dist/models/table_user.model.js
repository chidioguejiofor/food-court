"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class UserModel extends objection_1.Model {
}
exports.default = UserModel;
UserModel.tableName = 'users';
UserModel.idColumn = 'id';
//# sourceMappingURL=table_user.model.js.map