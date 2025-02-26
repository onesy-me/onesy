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
      <path d="M92-252v-456h776v456H92Zm94-28v-400h-66v400h66Zm28 0h532v-400H214v400Zm560 0h66v-400h-66v400ZM186-680h-66 66Zm588 0h66-66ZM530-456q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-200 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm300 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-200 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Z"/>
    </Icon>
  );
});

IconMaterialSmartScreenW100.displayName = 'OnesyIconMaterialSmartScreenW100';

export default IconMaterialSmartScreenW100;
