import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class SignUpDriverDto {
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8, {message: `Password Must Be Longer Than 8 Characters`})
  @MaxLength(20, {message: `Password Must Be Less Than 20 Characters`})
  @Matches(/((?=.*[a-z])(?=.*[A-Z]))/, {message: `Password Must Contain Upper Case Letter & Lower Case Letters`})
  @Matches(/((?=.*[0-9]))/, {message: `Password Must Contain a number from 0-9`})
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;
}

export class SignUpUserDto {
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8, {message: `Password Must Be Longer Than 8 Characters`})
  @MaxLength(20, {message: `Password Must Be Less Than 20 Characters`})
  @Matches(/((?=.*[a-z])(?=.*[A-Z]))/, {message: `Password Must Contain Upper Case Letter & Lower Case Letters`})
  @Matches(/((?=.*[0-9]))/, {message: `Password Must Contain a number from 0-9`})
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  countryId : number;

  @ApiProperty()
  @IsNotEmpty()
  cityId : number;

  @ApiProperty()
  @IsNotEmpty()
  stateId : number;
}

export class SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8, {message: `Password Must Be Longer Than 8 Characters`})
  @MaxLength(20, {message: `Password Must Be Less Than 20 Characters`})
  @Matches(/((?=.*[a-z])(?=.*[A-Z]))/, {message: `Password Must Contain Upper Case Letter & Lower Case Letters`})
  @Matches(/((?=.*[0-9]))/, {message: `Password Must Contain a number from 0-9`})
  password: string;
}

export class ForgotPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;
}

export class ForgotPassworCodedDto {
  @ApiProperty()
  @IsNotEmpty()
  code: string;
}

export class ChangePassworDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8, {message: `Password Must Be Longer Than 8 Characters`})
  @MaxLength(20, {message: `Password Must Be Less Than 20 Characters`})
  @Matches(/((?=.*[a-z])(?=.*[A-Z]))/, {message: `Password Must Contain Upper Case Letter & Lower Case Letters`})
  @Matches(/((?=.*[0-9]))/, {message: `Password Must Contain a number from 0-9`})
  password: string;
}

export class AccountVerifyDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;
}

export class AccountCodedDto {
  @ApiProperty()
  @IsNotEmpty()
  code: string;
}


export class TempDTO{


  @ApiProperty()
  @IsNotEmpty()
  name: string;
  
  @ApiProperty()
  @IsNotEmpty()
  email: string;
  
  @ApiProperty()
  @IsNotEmpty()
  phone: string;


}