import { HelloWorldGuard } from './hello-world.guard';

describe('HelloWorldGuard', () => {
  it('should be defined', () => {
    expect(new HelloWorldGuard()).toBeDefined();
  });
});
