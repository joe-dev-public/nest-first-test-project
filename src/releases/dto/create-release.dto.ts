import { MinLength } from 'class-validator';

export class CreateReleaseDto {
  artist: string;

  // Basic validation decorator:
  @MinLength(1)
  title: string;

  created_at: number;
}
