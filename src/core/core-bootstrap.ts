import {Module, ModuleMetadata} from '@nestjs/common';

export const coreModule: ModuleMetadata = {};

@Module(coreModule)
export class CoreBootstrap {}
