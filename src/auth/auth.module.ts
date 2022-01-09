import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConfig } from 'src/config/jwt-token.config';
import { RolesGuard } from './guards/roles.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
// import StripeService from 'src/common/stripe.service';
// import { SendGrid } from 'src/common/sendgrid.service';
// import { SmsService } from 'src/common/sms.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register(jwtConfig),
    
  ],
  // controllers: [AuthController],
  providers: [
    RolesGuard,
    JwtAuthGuard,
    JwtStrategy,
  ],
  // exports: [AuthService],
})
export class AuthModule { }
