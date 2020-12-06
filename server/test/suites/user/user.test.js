import { User } from '../../../src/user.mjs';

describe('User', () => {
    let user;

    beforeEach(() => {
        user = new User();
    });

    it('Default user should have an id', () => {
        expect(user.id).toBeDefined();
    });
});