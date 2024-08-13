import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { RestService } from './rest.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

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
  create(
    @Body() createRestDto: { name: string; restId: string; duration: number },
  ) {
    return this.restService.create(createRestDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({ status: 200, description: 'Return all rests.' })
  findAll() {
    return this.restService.findAll();
  }
}
