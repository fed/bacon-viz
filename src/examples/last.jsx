import Bacon from 'baconjs';

export default {
    name: 'last',
    category: 'array-like',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);
        const last = numbers.last();

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.last();',
                observable: last
            }
        }
    }
};
