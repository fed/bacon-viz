import Bacon from 'baconjs';

export default {
    name: 'once',
    category: 'creating',
    getInputsAndOutputs: () => {
        const output = Bacon.once(42);

        return {
            inputs: [],
            output: {
                code: 'Bacon.once(42);',
                observable: output
            }
        }
    }
};
