import { UserManager } from '../../../src/userManager.mjs';

describe('User Manager', () => {
    let userManager;

    beforeEach(() => {
        userManager = new UserManager();
    });

    it('getUsers should return the current list of users (which is empty by default)', () => {
        expect(userManager.getUsers().length).toBe(0);
    });

    it('addNewUser should add a new user', () => {
        expect(userManager.getUsers().length).toBe(0);
        userManager.addNewUser();
        expect(userManager.getUsers().length).toBe(1);
    });

    it('removeUserWithId should remove a user that matches the provided id', () => {
        expect(userManager.getUsers().length).toBe(0);
        userManager.addNewUser();
        expect(userManager.getUsers().length).toBe(1);
        const userId = userManager.getUsers()[0].id;
        userManager.removeUserWithId(userId);
        expect(userManager.getUsers().length).toBe(0);
    });

    it('removeUserWithId shouldn\'t remove a user if the id does not match anybody', () => {
        expect(userManager.getUsers().length).toBe(0);
        userManager.addNewUser();
        expect(userManager.getUsers().length).toBe(1);
        userManager.removeUserWithId('fake id');
        expect(userManager.getUsers().length).toBe(1);
    });

    it('getUserIds should produce an array of user ids for all users', () => {
        expect(userManager.getUsers().length).toBe(0);
        const user1 = userManager.addNewUser();
        const user2 = userManager.addNewUser();
        const userIds = userManager.getUserIds();
        expect(userIds.includes(user1.id)).toBe(true);
        expect(userIds.includes(user2.id)).toBe(true);
    });
});