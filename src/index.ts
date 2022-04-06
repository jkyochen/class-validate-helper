import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import "reflect-metadata";

export function Validate() {
    const validateParamIndex = 0;
    return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) {
        let originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const ParamTypes = Reflect.getMetadata('design:paramtypes', target, propertyName);
            const ParamType = ParamTypes[validateParamIndex];
            let param = plainToInstance(ParamType, args[validateParamIndex]);
            let errors = await validate(param);
            if (errors.length) {
                const error: any = new Error(errors.toString());
                error.errors = errors;
                error.paramName = propertyName;
                throw error;
            }
            if (!originalMethod) {
                return;
            }
            originalMethod.apply(this, args);
        };
    };
}
