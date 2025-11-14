import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('leaves')
export class LeavesController {
  @Get()
  getAll() {
    return [{ employeeId: 'E101', type: 'Annual', days: 3, status: 'approved' }];
  }

  @Post()
  create(@Body() body: any) {
    return { message: 'Leave request created (dummy)', data: body };
  }
}
