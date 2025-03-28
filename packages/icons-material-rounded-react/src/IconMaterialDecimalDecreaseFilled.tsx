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
      <path d="m621-200 35 35q11 12 11.5 28.5T656-108q-12 12-28.5 12T599-108L496-212q-12-12-12-28t12-28l103-104q12-12 28.5-12t28.5 12q12 12 11.5 28.5T656-315l-35 35h206q17 0 28.5 11.5T867-240q0 17-11.5 28.5T827-200H621ZM160-440h-40q-17 0-28.5-11.5T80-480v-40q0-17 11.5-28.5T120-560h40q17 0 28.5 11.5T200-520v40q0 17-11.5 28.5T160-440Zm220 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T440-580v-160q0-25-17.5-42.5T380-800q-25 0-42.5 17.5T320-740v160q0 25 17.5 42.5T380-520Z"/>
    </Icon>
  );
});

IconMaterialDecimalDecreaseFilled.displayName = 'OnesyIconMaterialDecimalDecreaseFilled';

export default IconMaterialDecimalDecreaseFilled;
