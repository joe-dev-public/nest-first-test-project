import { Controller, Get, Param, Post, Query } from '@nestjs/common';

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
}
