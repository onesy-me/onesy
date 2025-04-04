import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFallingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FallingFilled'

      short_name='Falling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m540-60-80-16 32-172-144-108-52-228-88 76 32 152-80 16-40-196 178-159q23-20 54.5-16.5T413-696q32 14 66.5 20t69.5 1q35-5 64.5-23t56.5-40l50 62q-30 23-62 43t-69 31q-33 9-66.5 9.5T456-600l28 124 148-28 208 148-48 64-172-120-144 28 108 80-44 244ZM320-740q-33 0-56.5-23.5T240-820q0-33 23.5-56.5T320-900q33 0 56.5 23.5T400-820q0 33-23.5 56.5T320-740Z"/>
    </Icon>
  );
});

IconMaterialFallingFilled.displayName = 'OnesyIconMaterialFallingFilled';

export default IconMaterialFallingFilled;
