import { PrismaService } from '@infra/database/prisma/prisma.service';
import { ClientPrismaRepository } from '@infra/database/repository/client-prisma.repository';
import { DynamicPixPrismaRepository } from '@infra/database/repository/dynamic-pix-prisma.repository';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: 'DYNAMIC_PIX_REPOSITORY',
      useFactory: (prisma: PrismaService) => {
        return new DynamicPixPrismaRepository(prisma);
      },
      inject: [PrismaService],
    },
    {
      provide: 'CLIENT_REPOSITORY',
      useFactory: (prisma: PrismaService) => {
        return new ClientPrismaRepository(prisma);
      },
      inject: [PrismaService],
    },
  ],
  exports: ['DYNAMIC_PIX_REPOSITORY', 'CLIENT_REPOSITORY'],
})
export class DatabaseModule {}
