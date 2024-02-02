import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { EMailerModule } from './e-mailer/e-mailer.module';
import { TypedEventEmitterModule } from './types/typed-event-emitter/typed-event-emitter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
    DatabaseModule,
    AuthModule,
    EMailerModule,
    TypedEventEmitterModule,
  ],
})
export class AppModule {}
