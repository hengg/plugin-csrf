import { BaseController, Path, Result } from '@umajs/core';

export default class Index extends BaseController {

    index() {
        return Result.send('This is index.');
    }

    @Path('/test')
    test() {
        return Result.send('This is test.');
    }
}
