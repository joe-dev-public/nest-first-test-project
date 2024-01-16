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
  // As above: URLs are strings. One tutorial keeps id type as "number" and
  // coerces the URL string to a number (with +id, rather than Number(id)).
  // Todo: research if there's a preferred way of handling this.
  getOneRelease(@Param('id') id: string) {
    return this.releasesService.getRelease(id);
  }

  @Post()
  createRelease(@Body() createReleaseDto: CreateReleaseDto) {
    return this.releasesService.createRelease(createReleaseDto);
  }

  @Put(':id')
  updateRelease(
    @Param('id') id: string,
    @Body() updateReleaseDto: UpdateReleaseDto,
  ) {
    return this.releasesService.updateRelease(id, updateReleaseDto);
  }
}
