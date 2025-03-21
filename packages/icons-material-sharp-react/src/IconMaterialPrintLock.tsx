import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintLock'

      short_name='PrintLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120v-200h40v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40h40v200H640Zm80-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40ZM160-560h640-640Zm80 440v-160H80v-360h800v150q-18-10-38-17t-42-10v-43H160v200h80v-80h340q-16 17-29 37t-21 43H320v160h204q7 22 17 42t24 38H240Zm400-520v-120H320v120h-80v-200h480v200h-80Z"/>
    </Icon>
  );
});

IconMaterialPrintLock.displayName = 'OnesyIconMaterialPrintLock';

export default IconMaterialPrintLock;
