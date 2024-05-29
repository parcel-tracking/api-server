import IErrorDTO from "./interfaces/IErrorDTO"

export default class ErrorDTO implements IErrorDTO {
  constructor(
    public readonly message: string,
    public readonly isError: true = true
  ) {}
}
