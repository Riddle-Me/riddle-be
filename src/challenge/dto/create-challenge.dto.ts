import { Type } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, MinLength, ValidateNested } from "class-validator";
import { Sponser } from "src/sponsor/sponser.schema";

export class CreateChallengeDto {    
    @ApiProperty()
    @IsEnum(['live', 'ended'], { message: 'Use Correct weapon'} )
    status: string;

    @ApiProperty()
    @MinLength(3)
    name: string;

    @ApiProperty()
    @ValidateNested({ each: true })
    @Type(() => Sponser)
    sponsers: Map<string, Partial<Sponser>>;
}
