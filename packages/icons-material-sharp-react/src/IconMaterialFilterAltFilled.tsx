import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltFilled'

      short_name='FilterAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160v-280L118-800h724L560-440v280H400Z"/>
    </Icon>
  );
});

IconMaterialFilterAltFilled.displayName = 'OnesyIconMaterialFilterAltFilled';

export default IconMaterialFilterAltFilled;
