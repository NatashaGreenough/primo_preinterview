import { merge } from '../src/preinterview_merge';

const testCase = [
    {
        id:0,
        input:{collection_1:[1,2,3], collection_2:[4,5,6], collection_3:[9,8,7]},
        output: [1,2,3,4,5,6,7,8,9]
    },
    {
        id:1,
        input:{collection_1:[3,6,9], collection_2:[2,4,8], collection_3:[7,5,1]},
        output: [1,2,3,4,5,6,7,8,9]
    },
    {
        id:2,
        input:{collection_1:[1,2,3,4,5], collection_2:[2,4,8], collection_3:[10, 0, -1]},
        output: [-1,0,1,2,2,3,4,4,5,8,10]
    }
]

describe('testing index file', () => {
    test.each(testCase)("Test Case $id", ({input, output}) => {
        const {collection_1, collection_2, collection_3} = input;
        expect(merge(collection_1, collection_2, collection_3)).toStrictEqual(output);
    });
});