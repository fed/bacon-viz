import Bacon from 'baconjs';

export default {
    name: 'toProperty',
    category: 'property',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);
        const output = numbers.toProperty(0);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.toProperty(0);',
                observable: output
            }
        }
    }
};
