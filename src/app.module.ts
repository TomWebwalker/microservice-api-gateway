import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      gateway: {
        serviceList: [{ name: 'users', url: 'http://localhost:5001/graphql' }],
      },
    }),
  ],
})
export class AppModule {}
