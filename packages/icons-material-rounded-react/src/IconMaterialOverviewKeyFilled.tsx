import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverviewKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyFilled'

      short_name='OverviewKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm600 0q-17 0-28.5-11.5T680-240v-480q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720v480q0 17-11.5 28.5T720-200Zm160 0q-17 0-28.5-11.5T840-240v-480q0-17 11.5-28.5T880-760q17 0 28.5 11.5T920-720v480q0 17-11.5 28.5T880-200Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyFilled.displayName = 'OnesyIconMaterialOverviewKeyFilled';

export default IconMaterialOverviewKeyFilled;
