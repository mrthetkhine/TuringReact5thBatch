import { faker } from '@faker-js/faker';

export const fakeNames = Array.from(Array(30), () => {
    return faker.name.findName();
});
