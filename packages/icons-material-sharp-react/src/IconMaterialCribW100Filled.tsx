import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCribW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribW100Filled'

      short_name='Crib'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q27 0 53.5-5t52.5-13v-166H374v166q26 8 52.5 13t53.5 5Zm0 28q-69 0-132.5-26.5T233-233l20-20q20 20 43.5 36.5T346-189v-155H212v-289q0-48 31.5-81.5T320-748h118v195h310v209H614v155q26-11 49.5-27.5T707-253l20 20q-51 48-114.5 74.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialCribW100Filled.displayName = 'OnesyIconMaterialCribW100Filled';

export default IconMaterialCribW100Filled;
