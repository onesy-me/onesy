import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShuffleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleW100Filled'

      short_name='Shuffle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-212v-28h130L557-385l20-20 143 143v-123h28v173H572Zm-340 0-20-20 488-488H572v-28h176v173h-28v-125L232-212Zm146-351L212-729l19-19 166 166-19 19Z"/>
    </Icon>
  );
});

IconMaterialShuffleW100Filled.displayName = 'OnesyIconMaterialShuffleW100Filled';

export default IconMaterialShuffleW100Filled;
