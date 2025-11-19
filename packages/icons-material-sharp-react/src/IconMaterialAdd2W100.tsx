import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdd2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Add2W100'

      short_name='Add2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-294H172v-28h294v-294h28v294h294v28H494v294h-28Z"/>
    </Icon>
  );
});

IconMaterialAdd2W100.displayName = 'OnesyIconMaterialAdd2W100';

export default IconMaterialAdd2W100;
