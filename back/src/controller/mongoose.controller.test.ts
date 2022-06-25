import { NextFunction, Request, Response } from 'express';

import mongoose from 'mongoose';
import { MongooseController } from './mongoose.controler';

describe('Given a instantiated controller MoongooseController', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    // eslint-disable-next-line no-unused-vars
    let next: Partial<NextFunction> = jest.fn();

    let mockModel = {
        find: jest.fn(),
        findById: jest.fn(),
        create: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
    };
    let controller = new MongooseController(
        mockModel as unknown as mongoose.Model<{}>
    );

    beforeEach(() => {
        req = {
            params: { id: '1' },
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            end: jest.fn(),
        };
    });
    describe('When method getAllController is called', () => {
        test('Then resp.end should be called with the data', async () => {
            const mockResult = [{ test: 'test' }];
            (mockModel.find as jest.Mock).mockResolvedValue(mockResult);
            await controller.getAllController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalledWith(mockResult);
            expect(resp.setHeader).toHaveBeenCalled();
        });
    });
});
