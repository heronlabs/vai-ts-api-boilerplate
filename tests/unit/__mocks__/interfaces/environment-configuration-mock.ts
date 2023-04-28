import {faker} from '@faker-js/faker';

export const EnvironmentConfigurationMock = {
  getConfig: jest.fn().mockResolvedValueOnce({
    cors: {
      origin: `${faker.internet.url()},${faker.internet.url()}`,
    },
  }),
};
