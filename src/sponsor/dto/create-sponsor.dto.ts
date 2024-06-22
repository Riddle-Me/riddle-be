import { IsEmail, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateSponsorDto {
    @ApiProperty()
    @IsString()
    _id: string;

    @ApiProperty()
    @IsNotEmpty()
    accountAddress: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsPositive()
    rewardAmount: number;

    @ApiProperty()
    @IsNotEmpty()
    tokenAddress: string;

    @ApiProperty()
    @IsNotEmpty()
    chainId: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
}
