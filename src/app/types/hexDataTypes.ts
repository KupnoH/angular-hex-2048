export type HexGridType = HexRowType[];

export type HexRowType = HexCellType[];

export type HexCellType = {
  x: number,
  y: number,
  z: number,
  value: number,
}
