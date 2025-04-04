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
      <path d="M320-120q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v160q0 33-23.5 56.5T800-280h-80v80q0 33-23.5 56.5T640-120H320Zm400-560H240v-80q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v80Zm0 220q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460ZM320-200h320v-160H320v160Z"/>
    </Icon>
  );
});

IconMaterialPrintFilled.displayName = 'OnesyIconMaterialPrintFilled';

export default IconMaterialPrintFilled;
