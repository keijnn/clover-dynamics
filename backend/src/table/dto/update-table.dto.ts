//import modules
import { IsString, IsNotEmpty, IsArray } from 'class-validator'

//import types
import { Card } from '../interfaces/card.interface'

export class UpdateTableDto {
  @IsArray()
  cards: Card[] | []
}
