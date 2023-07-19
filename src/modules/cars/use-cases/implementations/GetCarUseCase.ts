import { IGetCarUseCase, IRequestParams, IResponseBody } from '../IGetCarUseCase';

export class GetCarUseCase implements IGetCarUseCase {
  execute(params: IRequestParams): Promise<IResponseBody> {
    throw new Error('Method not implemented.');
  }
}
