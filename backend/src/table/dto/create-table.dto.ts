//import modules
import { IsArray, IsNotEmpty, IsString } from "class-validator"

//import types
import { Card } from "../interfaces/card.interface"


export class CreateTableDto {
  @IsString()
  @IsNotEmpty()
  _id: string

  @IsString()
  @IsNotEmpty()
  title: string
  
  @IsArray()
  cards: [] | Card[]
}
