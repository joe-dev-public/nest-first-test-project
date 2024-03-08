import { Injectable } from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';

@Injectable()
export class ReleasesService {
  // Placeholder data store
  private releases = [
    {
      id: 0,
      artist: 'Mala',
      title: 'Left Leg Out / Blue Notez',
      created_at: 2006,
    },
    { id: 1, artist: 'Rhythm & Sound', title: 'Best Friend', created_at: 2002 },
    { id: 2, artist: 'Unknown', title: 'Untitled', created_at: 2024 },
  ];

  getReleases(created_at?: string) {
    if (created_at) {
      // Could just store the created_at as strings above, but I'd rather convert
      // here so that the returned data feels more correct. (URL query
      // strings are always strings.)
      return this.releases.filter(
        (release) => String(release.created_at) === created_at,
      );
    }

    return this.releases;
  }

  getRelease(id: string) {
    // As above, coerce stored number to string, to avoid mixing types.
    const release = this.releases.find((release) => String(release.id) === id);

    if (!release) {
      throw new Error('release not found');
    }

    return release;
  }

  // I think number type is OK here because JSON request body can actually
  // differentiate between a few types? More or less.
  createRelease(createReleaseDto: CreateReleaseDto) {
    if (!createReleaseDto.title) {
      throw new Error('no title supplied');
    }
    if (!createReleaseDto.created_at) {
      throw new Error('no created_at supplied');
    }

    const nextId: number = this.releases[this.releases.length - 1]?.id + 1 || 0;

    // Placeholder data store update ("volatile")
    this.releases.push({ id: nextId, ...createReleaseDto });

    return this.releases[this.releases.length - 1];
  }

  updateRelease(id: string, updateReleaseDto: UpdateReleaseDto) {
    // This isn't really how to do validation, so as a temporary bodge,
    // throw an error unless title *and* created_at are supplied. (Realistically,
    // it would be fine if only one of the two were provided.)
    if (!updateReleaseDto.title) {
      throw new Error('no title supplied');
    }
    if (!updateReleaseDto.created_at) {
      throw new Error('no created_at supplied');
    }

    const index = this.releases.findIndex(
      (release) => String(release.id) === id,
    );

    if (index === -1) {
      throw new Error('invalid id');
    }

    // Todo: try spreading the DTO into an object in the array as a neater
    // way of doing an update?

    // Interesting, you get type errors here without a guard (above) against
    // undefined values.
    this.releases[index].title = updateReleaseDto.title;
    // I don't think the DTO does input type validation (nor coercion). I.e.
    // if you submit a string as part of the JSON, this will be updated to be
    // a string (and I don't think any part of TS could necessarily catch
    // that, as is?). Same applies to create, ofc.
    this.releases[index].created_at = updateReleaseDto.created_at;

    return this.releases[index];
  }

  deleteRelease(id: string) {
    const index = this.releases.findIndex(
      (release) => String(release.id) === id,
    );

    if (index === -1) {
      throw new Error('invalid id');
    }

    const release = this.releases[index];

    this.releases.splice(index, 1);

    return release;
  }
}
