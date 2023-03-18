//import types
import { Card } from "./card.interface"

export interface Table {
  _id: string
  title: string
  cards: Card[]
}