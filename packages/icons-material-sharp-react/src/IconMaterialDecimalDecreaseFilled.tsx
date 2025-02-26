import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDecimalDecreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalDecreaseFilled'

      short_name='DecimalDecrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80 480-240l160-160 56 56-63 64h247v80H633l63 64-56 56ZM80-440v-120h120v120H80Zm300 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T440-580v-160q0-25-17.5-42.5T380-800q-25 0-42.5 17.5T320-740v160q0 25 17.5 42.5T380-520Z"/>
    </Icon>
  );
});

IconMaterialDecimalDecreaseFilled.displayName = 'OnesyIconMaterialDecimalDecreaseFilled';

export default IconMaterialDecimalDecreaseFilled;
