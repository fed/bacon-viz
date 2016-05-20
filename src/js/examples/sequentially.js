import Bacon from 'baconjs';

export default {
    name: 'sequentially',
    category: 'creating',
    getInputsAndOutputs: () => {
        const output = Bacon.sequentially(2000, [1, 2, 3]);

        return {
            inputs: [],
            output: {
                code: 'Bacon.sequentially(2000, [1, 2, 3]);',
                observable: output
            }
        }
    }
};
