import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintLockFilled'

      short_name='PrintLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40ZM320-120q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520q0 11-8.5 16.5t-18.5.5q-21-8-44-12.5t-46-4.5q-72 0-132 38t-92 102q-5 9-13 14.5t-18 5.5H320v160h204q17 0 28.5 11.5T564-160q0 17-11.5 28.5T524-120H320Zm-40-560q-17 0-28.5-11.5T240-720v-40q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v40q0 17-11.5 28.5T680-680H280Z"/>
    </Icon>
  );
});

IconMaterialPrintLockFilled.displayName = 'OnesyIconMaterialPrintLockFilled';

export default IconMaterialPrintLockFilled;
