import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolymerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerFilled'

      short_name='Polymer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M321-160h-76q-22 0-40.5-11T175-201L42-441q-11-18-11-39t11-39l140-250q8-14 21.5-22.5T234-800h75q17 0 25.5 15t.5 30L180-480l104 186 289-468q11-18 29-28t39-10h72q22 0 40.5 11t29.5 30l135 240q11 18 11 39t-11 39L778-191q-8 14-21.5 22.5T726-160h-75q-17 0-25.5-15t-.5-30l155-275-104-184-287 466q-11 18-29 28t-39 10Z"/>
    </Icon>
  );
});

IconMaterialPolymerFilled.displayName = 'OnesyIconMaterialPolymerFilled';

export default IconMaterialPolymerFilled;
