//import modules
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'


//import service and controller
import { TableController } from './table.controller'
import { TableService } from './table.service'

//import types
import { TableSchema } from './schemas/table.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Table', schema: TableSchema }])],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
