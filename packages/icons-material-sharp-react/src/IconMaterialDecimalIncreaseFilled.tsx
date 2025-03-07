import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDecimalIncreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalIncreaseFilled'

      short_name='DecimalIncrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-80-56-56 63-64H480v-80h247l-63-64 56-56 160 160L720-80ZM80-440v-120h120v120H80Zm300 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm360 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm-360-80q25 0 42.5-17.5T440-580v-160q0-25-17.5-42.5T380-800q-25 0-42.5 17.5T320-740v160q0 25 17.5 42.5T380-520Zm360 0q25 0 42.5-17.5T800-580v-160q0-25-17.5-42.5T740-800q-25 0-42.5 17.5T680-740v160q0 25 17.5 42.5T740-520Z"/>
    </Icon>
  );
});

IconMaterialDecimalIncreaseFilled.displayName = 'OnesyIconMaterialDecimalIncreaseFilled';

export default IconMaterialDecimalIncreaseFilled;
