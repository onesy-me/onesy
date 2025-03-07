import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartScreenW100'

      short_name='SmartScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M530-456q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-200 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm300 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-200 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8ZM152-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h656q26 0 43 17t17 43v336q0 26-17 43t-43 17H152Zm34-28v-400h-34q-12 0-22 10t-10 22v336q0 12 10 22t22 10h34Zm28 0h532v-400H214v400Zm560 0h34q12 0 22-10t10-22v-336q0-12-10-22t-22-10h-34v400ZM186-680h-66 66Zm588 0h66-66Z"/>
    </Icon>
  );
});

IconMaterialSmartScreenW100.displayName = 'OnesyIconMaterialSmartScreenW100';

export default IconMaterialSmartScreenW100;
