import React from 'react';
import {
  SectionsContainer,
  Section,
  Header,
} from 'react-fullpage';
import HeaderApp from '../Header';
import Presentation from '../Presentation';
import CV from '../Cv';

import './styles.scss';

// == Composant
function App() {
  const options = {
    sectionClassName: 'section',
    anchors: ['Presentation', 'CV', 'Portfolio', 'Contact'],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    arrowNavigation: true,
  };
  return (
    <div className="test">
      <Header>
        <HeaderApp />
      </Header>
      <SectionsContainer className="container" {...options}>
        <Section>
          <Presentation />
        </Section>
        <Section>
          <CV />
        </Section>
        <Section>
          Page 3
        </Section>
        <Section>
          Page 4
        </Section>
      </SectionsContainer>
    </div>
  );
}

// == Export
export default App;
