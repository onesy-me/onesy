import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWavingHandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHandW100'

      short_name='WavingHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m453-488 255-256 20 20-255 255-20-19Zm91 90 227-227 20 20-228 227-19-20ZM233-235q-77-77-76.5-184T235-604l113-113 34 35q12 12 18 26.5t7 31.5l154-154 20 20-184 184-56 57 20 20q36 36 36 87t-36 87l-10 10-19-20 9-10q28-28 28-67t-28-67l-41-41 63-61q17-17 17-41.5T363-662l-15-15-93 92q-69 69-70.5 165T252-255q69 69 166.5 69T585-255l215-215 20 20-216 215q-78 78-185.5 78T233-235Zm185-186Zm224 317-1-28q78 0 132.5-54.5T828-319l28 1q0 89-62.5 151.5T642-104ZM104-642q0-89 62.5-151.5T318-856l1 28q-78 0-132.5 54.5T132-641l-28-1Z"/>
    </Icon>
  );
});

IconMaterialWavingHandW100.displayName = 'OnesyIconMaterialWavingHandW100';

export default IconMaterialWavingHandW100;
