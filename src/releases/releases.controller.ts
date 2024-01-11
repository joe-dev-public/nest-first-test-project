import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';

@Controller('releases')
export class ReleasesController {
  @Get()
  getReleases(@Query('year') year: number) {
    return [{ year }];
  }

  @Get(':id')
  getOneRelease(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createRelease(@Body() createReleaseDto: CreateReleaseDto) {
    return {
      name: createReleaseDto.name,
    };
  }
}
