import Bacon from 'baconjs';

export default {
    name: 'take',
    category: 'array-like',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);
        const firstFour = numbers.take(4);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.take(4);',
                observable: firstFour
            }
        }
    }
};
