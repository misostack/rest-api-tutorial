import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, ConnectionStates, Model } from 'mongoose';
import { Cat } from './schemas/cat.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection() private dbConnection: Connection,
    @InjectModel(Cat.name) private catModel: Model<Cat>,
  ) {
    console.log(
      this.dbConnection.db.databaseName,
      this.dbConnection.readyState === ConnectionStates.connected
        ? 'Connected'
        : '',
    );
  }
  async getHello(): Promise<Cat[]> {
    const createdCat = new this.catModel({
      name: 'Cat 1',
      age: 1,
      breed: 'test',
    });
    await createdCat.save();
    return this.catModel.find().exec();
  }
}
