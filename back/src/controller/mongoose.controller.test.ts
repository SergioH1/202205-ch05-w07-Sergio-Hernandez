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
    describe('When method getController is called', () => {
        test('them resp.end is called ', async () => {
            let mockResult = [{ test: 'test' }];
            (mockModel.findById as jest.Mock).mockResolvedValue(mockResult);
            await controller.getController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
    });
    test('them resp.status is called ', async () => {
        let mockResult = undefined;
        (mockModel.findById as jest.Mock).mockResolvedValue(mockResult);
        await controller.getController(req as Request, resp as Response);
        expect(resp.status).toHaveBeenCalledWith(404);
    });
    describe('When method postController is called', () => {
        test('them resp.end is called ', async () => {
            let mockResult = [{ test: 'test' }];
            (mockModel.create as jest.Mock).mockResolvedValue(mockResult);
            await controller.postController(
                req as Request,
                resp as Response,
                next as jest.Mock
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
    });
    test('them next is called ', async () => {
        let mockResult = null;
        (mockModel.create as jest.Mock).mockResolvedValue(mockResult);
        await controller.postController(
            req as Request,
            resp as Response,
            next as jest.Mock
        );
        expect(next).toBeCalledTimes(1);
    });
    describe('When method patchController is called', () => {
        test('them resp.end is called ', async () => {
            let mockResult = [{ test: 'test' }];
            (mockModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(
                mockResult
            );
            await controller.patchController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
    });
    describe('When method deleteController is called', () => {
        test('them resp.end is called ', async () => {
            let deleteMock = undefined;
            (mockModel.findByIdAndUpdate as jest.Mock).mockResolvedValue(
                deleteMock
            );
            await controller.deleteController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(deleteMock));
        });
    });
});
