//import modules
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

//import types
import { UpdateTableDto } from './dto/update-table.dto'
import { Table } from './interfaces/table.interface'
import { CreateTableDto } from './dto/create-table.dto'

@Injectable()
export class TableService {
  constructor(@InjectModel('Table') private readonly tableModel: Model<Table>) {}

  //find all tables
  async findAll(): Promise<Table[]> {
    return await this.tableModel.find()
  }

  //create new table
  async create(createTableDto: CreateTableDto): Promise<Table> {
    const duplicate = await this.tableModel.findById(createTableDto._id)

    //if table id exist
    if (duplicate) {
      throw new ConflictException('User already exist!')
    }
    const newTable = new this.tableModel(createTableDto)
    return newTable.save()
  }

  //find table by id and update it
  async update(_id: string, updateTableDto: UpdateTableDto): Promise<Table> {
    const updatedTable = await this.tableModel.findByIdAndUpdate(_id, updateTableDto, {
      new: true,
    })
    console.log(updatedTable)
    //if table id not exist
    if (!updatedTable) {
      throw new NotFoundException('Table not found!')
    }
    return updatedTable
  }

  //find table by id and delete it
  async delete(_id: string): Promise<Table> {
    const deletedStudent = await this.tableModel.findByIdAndDelete(_id)

    //if table id not exist
    if (!deletedStudent) {
      throw new NotFoundException('Table not found!')
    }
    return deletedStudent
  }
}
