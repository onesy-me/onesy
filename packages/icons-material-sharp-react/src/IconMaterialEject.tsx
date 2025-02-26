import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEject = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Eject'

      short_name='Eject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Zm266-80Zm-118 0h236L480-616 362-440Z"/>
    </Icon>
  );
});

IconMaterialEject.displayName = 'OnesyIconMaterialEject';

export default IconMaterialEject;
