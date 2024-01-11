import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';

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

  @Put(':id')
  updateRelease(
    @Param('id') id: number,
    @Body() updateReleaseDto: UpdateReleaseDto,
  ) {
    return {
      id,
      name: updateReleaseDto.name,
    };
  }
}
