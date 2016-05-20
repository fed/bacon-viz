import Bacon from 'baconjs';

export default {
    name: 'repeatedly',
    category: 'creating',
    getInputsAndOutputs: () => {
        const output = Bacon.repeatedly(2000, [1, 2, 3]);

        return {
            inputs: [],
            output: {
                code: 'Bacon.repeatedly(2000, [1, 2, 3]);',
                observable: output
            }
        }
    }
};
