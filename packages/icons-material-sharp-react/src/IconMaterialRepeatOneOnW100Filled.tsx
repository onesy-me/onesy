import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOneOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneOnW100Filled'

      short_name='RepeatOneOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-92q-11.55 0-19.78-8.22Q92-108.45 92-120v-720q0-11.55 8.22-19.78Q108.45-868 120-868h720q11.55 0 19.78 8.22Q868-851.55 868-840v720q0 11.55-8.22 19.78Q851.55-92 840-92H120Zm176-40 20-20-90-90h498v-188h-28v160H226l90-90-20-20-124 124 124 124Zm-60-398h28v-160h470l-90 90 20 20 124-124-124-124-20 20 90 90H236v188Zm240 154h28v-208h-72v28h44v180Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneOnW100Filled.displayName = 'OnesyIconMaterialRepeatOneOnW100Filled';

export default IconMaterialRepeatOneOnW100Filled;
