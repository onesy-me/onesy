import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintFilled'

      short_name='Print'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-680v-160h480v160H240Zm480 220q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460ZM320-200h320v-160H320v160Zm-80 80v-160H80v-360h800v360H720v160H240Z"/>
    </Icon>
  );
});

IconMaterialPrintFilled.displayName = 'OnesyIconMaterialPrintFilled';

export default IconMaterialPrintFilled;
