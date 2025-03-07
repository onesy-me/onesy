import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationAwayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAwayFilled'

      short_name='LocationAway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120v-76q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320q54 0 104.5 14t96.5 41q18 11 28.5 29.5T880-196v76H400Zm-320 0v-480l320-240 215 162q-75 9-125 65.5T440-480q0 31 8.5 58.5T473-370q-20 8-38.5 16.5T398-334q-36 21-57 58.5T320-196v76H80Zm560-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialLocationAwayFilled.displayName = 'OnesyIconMaterialLocationAwayFilled';

export default IconMaterialLocationAwayFilled;
