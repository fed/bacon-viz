import Bacon from 'baconjs';

export default {
    name: 'sample',
    category: 'property',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]).toProperty(0);
        const output = numbers.sample(2500);

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]).toProperty(0);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.sample(2500);',
                observable: output
            }
        }
    }
};
