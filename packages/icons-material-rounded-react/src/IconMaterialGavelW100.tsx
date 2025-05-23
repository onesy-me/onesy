import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGavelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelW100'

      short_name='Gavel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-174h400q6 0 10 4t4 10q0 6-4 10t-10 4H180q-6 0-10-4t-4-10q0-6 4-10t10-4Zm186-240L260-520q-17-17-17.5-41.5T259-604l7-8 192 190-8 8q-17 17-42 17t-42-17Zm252-168L428-774l8-7q18-17 42.5-16.5T520-780l106 106q17 17 17 42t-17 42l-8 8Zm196 376L338-682l20-20 476 476q4 4 4.5 9.5T834-206q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialGavelW100.displayName = 'OnesyIconMaterialGavelW100';

export default IconMaterialGavelW100;
