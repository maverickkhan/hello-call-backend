import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateGetQuoteDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string
}
