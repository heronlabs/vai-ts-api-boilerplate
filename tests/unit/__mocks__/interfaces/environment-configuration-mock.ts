import {faker} from '@faker-js/faker';

import {EnvironmentConfiguration} from '../../../../src/application/configuration/interfaces/environment-configuration';

export const EnvironmentConfigurationMock: EnvironmentConfiguration = {
  cors: {
    origin: `${faker.internet.url()},${faker.internet.url()}`,
  },
};
