import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { RestLogService } from './restlog.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiProperty } from "@nestjs/swagger";
import { RestLog } from "./restlog.entity";

class RestLogDTO {
  @ApiProperty({
    example: '1',
    description: '휴식 정보 검색용',
  })
  restId: string;

  @ApiProperty({ example: '0814132745', description: '시작 시간 2개씩 월 일 시간 분 초' })
  startTime: string;
}

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
  create(@Body() createRestLogDto: RestLogDTO) {
    return this.restLogService.create(createRestLogDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({ status: 200, description: 'Return all rest logs.' })
  findAll() {
    return this.restLogService.findAll();
  }
}
