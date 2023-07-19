export interface IRequestParams {
  id: string;
}

export interface IResponseBody {
  id?: string;
  name: string;
  msrp: number;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IGetCarUseCase {
  execute(params: IRequestParams): Promise<IResponseBody>;
}
