import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOnW100Filled'

      short_name='RepeatOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-92q-12 0-20-8t-8-20v-720q0-12 8-20t20-8h720q12 0 20 8t8 20v720q0 12-8 20t-20 8H120Zm176-40 20-20-90-90h498v-188h-28v160H226l90-90-20-20-124 124 124 124Zm-60-398h28v-160h470l-90 90 20 20 124-124-124-124-20 20 90 90H236v188Z"/>
    </Icon>
  );
});

IconMaterialRepeatOnW100Filled.displayName = 'OnesyIconMaterialRepeatOnW100Filled';

export default IconMaterialRepeatOnW100Filled;
