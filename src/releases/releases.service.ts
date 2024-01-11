import { Injectable } from '@nestjs/common';

@Injectable()
export class ReleasesService {
  // Placeholder data store
  private releases = [
    { id: 0, name: 'Left Leg Out / Blue Notez', year: 2006 },
    { id: 1, name: 'Best Friend', year: 2002 },
  ];

  getReleases(year?: string) {
    if (year) {
      // Could just store the years as strings above, but I'd rather convert
      // here so that the returned data feels more correct. (URL query
      // strings are always strings.)
      return this.releases.filter((release) => String(release.year) === year);
    }

    return this.releases;
  }
}
