import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gate'

      short_name='Gate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280q-17 0-28.5-11.5T80-320v-320q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v320q0 17-11.5 28.5T120-280Zm120 80q-17 0-28.5-11.5T200-240v-360q0-66 47-113t113-47h240q66 0 113 47t47 113v360q0 17-11.5 28.5T720-200H240Zm600-80q-17 0-28.5-11.5T800-320v-320q0-17 11.5-28.5T840-680q17 0 28.5 11.5T880-640v320q0 17-11.5 28.5T840-280ZM480-480ZM280-280h160v-160h-40q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h40v-160h-80q-33 0-56.5 23.5T280-600v320Zm240 0h160v-320q0-33-23.5-56.5T600-680h-80v160h40q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440h-40v160Z"/>
    </Icon>
  );
});

IconMaterialGate.displayName = 'OnesyIconMaterialGate';

export default IconMaterialGate;
