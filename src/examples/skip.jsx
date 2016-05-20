import Bacon from 'baconjs';

export default {
    name: 'skip',
    category: 'array-like',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);
        const skipFour = numbers.skip(4);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.skip(4);',
                observable: skipFour
            }
        }
    }
};
