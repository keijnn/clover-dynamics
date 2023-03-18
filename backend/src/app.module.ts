//import Nest modules
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

//import app modules
import { TableModule } from './table/table.module'

@Module({
  imports: [
    TableModule,
    MongooseModule.forRoot('mongodb+srv://helltaker:9dZ1nqFh2t7zgEOu@clover-dynamics.3whxzdj.mongodb.net/?retryWrites=true&w=majority'),
  ],
})
export class AppModule {}


