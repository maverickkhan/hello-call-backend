import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SingleEmailDTO {

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    To: string;
    
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    From: string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Subject: string;
    
    @IsOptional()
    @IsString()
    @ApiProperty()
    html: string;

}
