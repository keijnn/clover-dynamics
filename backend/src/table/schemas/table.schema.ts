//import modules
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

//import types
import { Card } from '../interfaces/card.interface'

@Schema()
export class Table {
  @Prop()
  _id: string

  @Prop()
  title: string

  @Prop()
  cards: Card[]
}

export const TableSchema = SchemaFactory.createForClass(Table)
