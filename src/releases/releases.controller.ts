import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';
import { ReleasesService } from './releases.service';
import { HelloWorldGuard } from 'src/hello-world/hello-world.guard';

@Controller('releases')
export class ReleasesController {
  // Todo: a better understanding of this?
  constructor(private readonly releasesService: ReleasesService) {}

  @Get()
  @UseGuards(HelloWorldGuard)
  // Note: HTTP URL query strings are always strings(!), so I'm not sure it
  // makes sense to use any type other than "string" here?
  getReleases(@Query('created_at') created_at: string) {
    return this.releasesService.getReleases(created_at);
  }

  @Get(':id')
  // As above: URLs are strings. One tutorial keeps id type as "number" and
  // coerces the URL string to a number (with +id, rather than Number(id)).
  // It looks like "pipes" are probably the preferred way of handling this
  // (https://docs.nestjs.com/pipes).
  getOneRelease(@Param('id', ParseIntPipe) id: number) {
    // Typical to handle exceptions in the controller?
    try {
      return this.releasesService.getRelease(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  createRelease(
    @Body(new ValidationPipe({ skipMissingProperties: true }))
    createReleaseDto: CreateReleaseDto,
  ) {
    return this.releasesService.createRelease(createReleaseDto);
  }

  @Put(':id')
  updateRelease(
    @Param('id') id: string,
    @Body() updateReleaseDto: UpdateReleaseDto,
  ) {
    return this.releasesService.updateRelease(id, updateReleaseDto);
  }

  @Delete(':id')
  deleteRelease(@Param('id') id: string) {
    return this.releasesService.deleteRelease(id);
  }
}
