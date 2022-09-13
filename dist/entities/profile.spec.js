"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const profile_1 = require("./profile");
(0, vitest_1.test)('create an profile', () => {
    const profile = new profile_1.Profile({
        role: ['administrator', 'technicalManager', 'operator', 'viewer'],
        duty: ['master', 'owner', 'manager', 'partner'],
    });
    (0, vitest_1.expect)(profile).toBeInstanceOf(profile_1.Profile);
    (0, vitest_1.expect)(profile.role).toContainEqual('administrator');
    (0, vitest_1.expect)(profile.role).toContainEqual('technicalManager');
    (0, vitest_1.expect)(profile.role).toContainEqual('operator');
    (0, vitest_1.expect)(profile.role).toContainEqual('viewer');
    (0, vitest_1.expect)(profile.duty).toContainEqual('master');
    (0, vitest_1.expect)(profile.duty).toContainEqual('owner');
    (0, vitest_1.expect)(profile.duty).toContainEqual('manager');
    (0, vitest_1.expect)(profile.duty).toContainEqual('partner');
});
//# sourceMappingURL=profile.spec.js.map