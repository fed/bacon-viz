import Bacon from 'baconjs';

export default {
    name: 'filter',
    category: 'array-like',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);
        const evens = numbers.filter(x => x % 2 == 0);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.filter(x => x % 2 == 0);',
                observable: evens
            }
        }
    }
};
