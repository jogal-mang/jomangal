import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { RestLogService } from './restlog.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@ApiTags('RestLog')
@ApiBearerAuth()
@Controller('restlog')
export class RestLogController {
  constructor(private readonly restLogService: RestLogService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The rest log has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createRestLogDto: { restId: string; startTime: Date }) {
    return this.restLogService.create(createRestLogDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({ status: 200, description: 'Return all rest logs.' })
  findAll() {
    return this.restLogService.findAll();
  }
}
