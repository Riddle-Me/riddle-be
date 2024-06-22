import { MinLength, IsEmail, IsArray, ValidateNested } from "class-validator";
import { Challenge } from '../../challenge/challenge.schema';
import { Type } from "class-transformer";

export class CreateUserDto {
    @MinLength(3)
    name: string;

    @IsEmail()
    email: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Challenge)
    challenges: Challenge[];
}
