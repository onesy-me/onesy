import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBentoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoFilled'

      short_name='Bento'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-520h240v-240H640v240ZM80-200h480v-560H80v560Zm240-220q-25 0-42.5-17.5T260-480q0-25 17.5-42.5T320-540q25 0 42.5 17.5T380-480q0 25-17.5 42.5T320-420Zm320 220h240v-240H640v240Z"/>
    </Icon>
  );
});

IconMaterialBentoFilled.displayName = 'OnesyIconMaterialBentoFilled';

export default IconMaterialBentoFilled;
