import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexNoWrapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexNoWrapW100'

      short_name='FlexNoWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-317v-326h176v326H92Zm300 0v-326h176v326H392Zm300 0v-326h176v326H692Zm-572-28h120v-270H120v270Zm610 0h110v-270H730v270Z"/>
    </Icon>
  );
});

IconMaterialFlexNoWrapW100.displayName = 'OnesyIconMaterialFlexNoWrapW100';

export default IconMaterialFlexNoWrapW100;
