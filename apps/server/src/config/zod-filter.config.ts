import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

/**
 * Captures zod validation errors
 * Returns invalid requests with the errors
 */
@Catch(ZodError)
export class ZodFilter<T extends ZodError> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = 400;
    response.status(status).json({
      message: fromZodError(exception).toString(),
      statusCode: status,
    });
  }
}

/**
 * Validates the piped value using a zod schema
 */
@Injectable()
export class ZodPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private readonly schema: any) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any) {
    const parsed = this.schema.parse(value);
    return parsed;
  }
}
