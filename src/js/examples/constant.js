import Bacon from 'baconjs';

export default {
    name: 'constant',
    category: 'creating',
    getInputsAndOutputs: () => {
        const output = Bacon.constant(5);

        return {
            inputs: [],
            output: {
                code: 'Bacon.constant(5);',
                observable: output
            }
        }
    }
};
