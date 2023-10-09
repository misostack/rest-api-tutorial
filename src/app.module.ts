import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_LOGGING, DB_URI } from './config/environment';
import mongoose from 'mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';

mongoose.set('debug', DB_LOGGING);

@Module({
  imports: [
    MongooseModule.forRoot(DB_URI),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
