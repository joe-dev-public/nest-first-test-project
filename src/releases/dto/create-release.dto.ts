import { IsEnum, MinLength } from 'class-validator';

export class CreateReleaseDto {
  artist: string;

  // Basic validation decorator:
  @MinLength(1)
  title: string;

  created_at: number;

  // Todo: is this kind of duplication really required?(!)
  @IsEnum(['cd', 'digital', 'vinyl'])
  media: 'cd' | 'digital' | 'vinyl';
}
