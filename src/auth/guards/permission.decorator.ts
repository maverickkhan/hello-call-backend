import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from './roles.guard';

export function hasRole(...hasRole: string[]) 
{
  return applyDecorators(
    ApiBearerAuth(),
    SetMetadata('role', hasRole),
    UseGuards(AuthGuard(),RolesGuard),
  )
}

export function forAllUser() 
{
  return applyDecorators(
    ApiBearerAuth(),
    UseGuards(AuthGuard()),
  )
}

