import { Injectable } from '@nestjs/common';

@Injectable()
export class LeavesService {
  findAll() {
    return { message: 'This is the leaves endpoint' };
  }
}
