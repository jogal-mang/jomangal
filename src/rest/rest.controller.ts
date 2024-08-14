import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { RestService } from './rest.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiResponse, ApiParam, ApiProperty } from "@nestjs/swagger";

class RestDTO {
  @ApiProperty({ example: '제갈무릎베게위에 쉬기', description: '휴식 이름' })
  name: string;

  @ApiProperty({
    example: '1',
    description: 'id(더비임ㅋ)',
  })
  restId: string;

  @ApiProperty({ example: '600', description: '기간 (초단위)' })
  duration: number;
}

@ApiTags('Rest')
@ApiBearerAuth()
@Controller('rest')
export class RestController {
  constructor(private readonly restService: RestService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The rest has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createRestDto: RestDTO) {
    return this.restService.create(createRestDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({ status: 200, description: 'Return all rests.' })
  findAll() {
    return this.restService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiParam({ name: 'id', required: true, description: 'Unique identifier for the rest', type: Number })
  @ApiResponse({ status: 200, description: 'Return a specific rest by id.' })
  @ApiResponse({ status: 404, description: 'Rest not found.' })
  getRestById(@Param('id') id: number) {
    return this.restService.findOneById(id);
  }
}
