import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStorage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Storage'

      short_name='Storage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialStorage.displayName = 'OnesyIconMaterialStorage';

export default IconMaterialStorage;
