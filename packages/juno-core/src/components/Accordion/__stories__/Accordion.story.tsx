import React, { ComponentProps } from 'react';

import {
  RcAccordion,
  RcAccordionDetails,
  RcAccordionProps,
  RcAccordionSummary,
} from '@ringcentral/juno';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

export default {
  title: '🚀 Cleanup Components/Accordion/Accordion',
  component: RcAccordion,
  argTypes: {
    ...sortInDocTable<keyof AccordionProps>([
      'variant',
      'disabled',
      'expanded',
      'defaultExpanded',
    ]),
    ...notControlInDocTable<keyof AccordionProps>([]),
    ...notShowInDocTable<keyof AccordionProps>([]),
  },
} as Meta;

type AccordionProps = ComponentProps<typeof RcAccordion>;

export const Accordion: Story<RcAccordionProps> = ({ children, ...args }) => {
  switchToControlKnobs();
  return (
    <RcAccordion {...args}>
      <RcAccordionSummary expandIcon>Expansion Panel 1</RcAccordionSummary>
      <RcAccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </RcAccordionDetails>
    </RcAccordion>
  );
};

Accordion.args = {};

Accordion.argTypes = {
  ...notControlInDocTable<keyof AccordionProps>([]),
};

Accordion.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/9e531c6b30974c6e11ee1ca2030d489988c01e23/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/3EEDBD24-7FC7-4489-94B6-C1868436B6A3',
    },
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/accordion/#accordion',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const AccordionExamples: Story<RcAccordionProps> = () => {
  switchToControlKnobs();

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <RcAccordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <RcAccordionSummary
          expandIcon
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          General settings
        </RcAccordionSummary>
        <RcAccordionDetails>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </RcAccordionDetails>
      </RcAccordion>
      <RcAccordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <RcAccordionSummary
          expandIcon
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          Users
        </RcAccordionSummary>
        <RcAccordionDetails>
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
          varius pulvinar diam eros in elit. Pellentesque convallis laoreet
          laoreet.
        </RcAccordionDetails>
      </RcAccordion>
      <RcAccordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <RcAccordionSummary
          expandIcon
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          Advanced settings
        </RcAccordionSummary>
        <RcAccordionDetails>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
          amet egestas eros, vitae egestas augue. Duis vel est augue.
        </RcAccordionDetails>
      </RcAccordion>
      <RcAccordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <RcAccordionSummary
          expandIcon={expanded === 'panel4'}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          Personal data (only when expanded have icon)
        </RcAccordionSummary>
        <RcAccordionDetails>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
          amet egestas eros, vitae egestas augue. Duis vel est augue.
        </RcAccordionDetails>
      </RcAccordion>
    </>
  );
};
