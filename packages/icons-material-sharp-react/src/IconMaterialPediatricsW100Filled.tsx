import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPediatricsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PediatricsW100Filled'

      short_name='Pediatrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-650v-28h140v-110h28v110h140v28H326Zm66 496q-24.75 0-42.37-17.63Q332-189.25 332-214v-83h122v-28H332v-114h122v-28H332v-53q0-37.5 26.25-63.75T422-610h116q37.5 0 63.75 26.25T628-520v306q0 24.75-17.62 42.37Q592.75-154 568-154H392Z"/>
    </Icon>
  );
});

IconMaterialPediatricsW100Filled.displayName = 'OnesyIconMaterialPediatricsW100Filled';

export default IconMaterialPediatricsW100Filled;
