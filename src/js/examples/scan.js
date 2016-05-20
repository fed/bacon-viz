import Bacon from 'baconjs';

export default {
    name: 'scan',
    category: 'array-like',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);
        const total = numbers.scan(0, (a, b) => a + b);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.scan(0, (a, b) => a + b);',
                observable: total
            }
        }
    }
};
