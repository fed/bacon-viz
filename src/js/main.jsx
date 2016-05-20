import React from 'react';
import Bacon from 'baconjs';
import {render} from 'react-dom';
import Container from './container';
import SecondaryColumn from './secondary-column';
import Logo from './logo';
import Navigation from './navigation';
import PrimaryColumn from './primary-column';
import Example from './example';
import Footer from './footer';
import examples from './examples/examples';

const clickBus = new Bacon.Bus();
const selectedExampleProperty = clickBus.toProperty(examples[0]);

const appProperty = selectedExampleProperty.map(selectedExample => {
    return (
        <Container>
            <SecondaryColumn>
                <Logo />
                <Navigation
                    examples={examples}
                    selectedExample={selectedExample}
                    onClick={example => clickBus.push(example)} />
            </SecondaryColumn>
            <PrimaryColumn>
                <Example example={selectedExample.getInputsAndOutputs()} />
                <Footer />
            </PrimaryColumn>
        </Container>
    )
});
const container = document.getElementById('app');
appProperty.onValue(app => render(app, container));
