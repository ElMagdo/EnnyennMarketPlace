export class CardItm {
  constructor(
    public imageUrl?: string,
    public name?: string,
    public amount?: number,
  ){ }
};

export class ListItm {
  constructor(
    public id?: number,
    public name?: string,
    public state?: string,
    public amount?: number,
  ){ }
};
