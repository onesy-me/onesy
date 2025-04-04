import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWavingHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHandW100Filled'

      short_name='WavingHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M104-642q0-89 62.5-151.5T318-856l1 28q-78 0-132.5 54.5T132-641l-28-1Zm129 407q-77-77-76.5-184T235-604l93-93 20 20q20 20 22 47.5T353-583l-60 58 27 27q27 27 27 65t-27 65l-20 20 20 19 20-19q35-35 35-85t-35-85l-6-7 47-47q8-10 12-20.5t6-22.5l162-163 20 20-177 177 71 71 233-234 20 20-234 233 71 71 206-205 20 20-206 205 72 72 143-142 20 20-216 215q-78 78-185.5 78T233-235Zm409 131-1-28q78 0 132.5-54.5T828-319l28 1q0 89-62.5 151.5T642-104Z"/>
    </Icon>
  );
});

IconMaterialWavingHandW100Filled.displayName = 'OnesyIconMaterialWavingHandW100Filled';

export default IconMaterialWavingHandW100Filled;
