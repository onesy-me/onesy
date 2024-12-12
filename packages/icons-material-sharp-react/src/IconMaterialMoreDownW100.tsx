import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownW100'

      short_name='MoreDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-226v-362h28v334h334v28H226Zm200-200v-362h28v334h334v28H426Z"/>
    </Icon>
  );
});

IconMaterialMoreDownW100.displayName = 'OnesyIconMaterialMoreDownW100';

export default IconMaterialMoreDownW100;
