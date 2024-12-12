import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveW100'

      short_name='Remove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-466v-28h456v28H252Z"/>
    </Icon>
  );
});

IconMaterialRemoveW100.displayName = 'OnesyIconMaterialRemoveW100';

export default IconMaterialRemoveW100;
