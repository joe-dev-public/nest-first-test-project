import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';
import { ReleasesService } from './releases.service';

@Controller('releases')
export class ReleasesController {
  // Todo: a better understanding of this?
  constructor(private readonly releasesService: ReleasesService) {}

  @Get()
  // Note: HTTP URL query strings are always strings(!), so I'm not sure it
  // makes sense to use any type other than "string" here?
  getReleases(@Query('year') year: string) {
    return this.releasesService.getReleases(year);
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
