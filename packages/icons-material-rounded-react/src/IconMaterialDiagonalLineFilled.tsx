import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiagonalLineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiagonalLineFilled'

      short_name='DiagonalLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-80q-50 0-85-35t-35-85q0-14 3-27t9-25L252-652q-12 6-25 9t-27 3q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 14-3 27t-9 25l400 400q12-6 25-9t27-3q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialDiagonalLineFilled.displayName = 'OnesyIconMaterialDiagonalLineFilled';

export default IconMaterialDiagonalLineFilled;
