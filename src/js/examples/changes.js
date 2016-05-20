import Bacon from 'baconjs';

export default {
    name: 'changes',
    category: 'property',
    getInputsAndOutputs: () => {
        const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]).toProperty(0);
        const output = numbers.changes();

        return {
            inputs: [
                {
                    code: 'const numbers = Bacon.sequentially(2000, [1, 2, 3, 4, 5, 6]).toProperty(0);',
                    observable: numbers
                }
            ],
            output: {
                code: 'numbers.changes();',
                observable: output
            }
        }
    }
};
