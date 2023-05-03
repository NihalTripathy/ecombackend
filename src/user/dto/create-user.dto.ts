import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'First Name is required' })
    firstName: string;
    @IsString()
    @IsNotEmpty({ message: 'Last Name is required' })
    lastName: string;
    @IsNumber()
    @IsNotEmpty({ message: 'Age is required' })
    age: string;
    @IsEmail()
    @IsNotEmpty({ message: 'Email is required' })
    email_id: string;
    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    password: string;
}