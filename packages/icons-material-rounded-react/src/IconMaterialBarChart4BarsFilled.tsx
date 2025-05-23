import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarChart4BarsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChart4BarsFilled'

      short_name='BarChart4Bars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm60-120q-25 0-42.5-17.5T120-300v-160q0-25 17.5-42.5T180-520q25 0 42.5 17.5T240-460v160q0 25-17.5 42.5T180-240Zm200 0q-25 0-42.5-17.5T320-300v-360q0-25 17.5-42.5T380-720q25 0 42.5 17.5T440-660v360q0 25-17.5 42.5T380-240Zm200 0q-25 0-42.5-17.5T520-300v-240q0-25 17.5-42.5T580-600q25 0 42.5 17.5T640-540v240q0 25-17.5 42.5T580-240Zm200 0q-25 0-42.5-17.5T720-300v-480q0-25 17.5-42.5T780-840q25 0 42.5 17.5T840-780v480q0 25-17.5 42.5T780-240Z"/>
    </Icon>
  );
});

IconMaterialBarChart4BarsFilled.displayName = 'OnesyIconMaterialBarChart4BarsFilled';

export default IconMaterialBarChart4BarsFilled;
