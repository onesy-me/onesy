import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashW100Filled'

      short_name='Wash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-132q-56 0-95-33t-39-89v-192q0-24.25 11.34-44.98Q154.67-511.7 175-525l313-202q3-2 8.5-2.5t9.5 3.5q13 13 10.5 27T505-670l-75 126h304q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H532v100h282q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H532v100h242q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H532v100h162q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H266Zm447.9-507q-28.9 0-51.4-22.72-22.5-22.71-22.5-51.76 0-33.52 21-66.02 21-32.5 41-58.5 4.75-6 11.88-6 7.12 0 12.12 6 20 26 41 58.37 21 32.36 21 66.63 0 28.86-22.6 51.43T713.9-639Z"/>
    </Icon>
  );
});

IconMaterialWashW100Filled.displayName = 'OnesyIconMaterialWashW100Filled';

export default IconMaterialWashW100Filled;
