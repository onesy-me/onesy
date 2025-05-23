import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGeneticsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneticsFilled'

      short_name='Genetics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q0-139 58-225.5T418-480q-102-88-160-174.5T200-880v-10q0-17 11.5-28.5T240-930q17 0 28.5 11.5T280-890v10q0 11 .5 20.5T282-840h396q1-10 1.5-19.5t.5-20.5v-10q0-17 11.5-28.5T720-930q17 0 28.5 11.5T760-890v10q0 139-58 225.5T542-480q102 88 160 174.5T760-80v10q0 17-11.5 28.5T720-30q-17 0-28.5-11.5T680-70v-10q0-11-.5-20.5T678-120H282q-1 10-1.5 19.5T280-80v10q0 17-11.5 28.5T240-30q-17 0-28.5-11.5T200-70v-10Zm138-600h284q13-19 22.5-38t17.5-42H298q8 22 17.5 41.5T338-680Zm142 148q20-17 39-34t36-34H405q17 17 36 34t39 34Zm-75 172h150q-17-17-36-34t-39-34q-20 17-39 34t-36 34ZM298-200h364q-8-22-17.5-41.5T622-280H338q-13 19-22.5 38T298-200Z"/>
    </Icon>
  );
});

IconMaterialGeneticsFilled.displayName = 'OnesyIconMaterialGeneticsFilled';

export default IconMaterialGeneticsFilled;
