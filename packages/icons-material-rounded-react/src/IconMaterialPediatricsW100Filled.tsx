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
      <path d="M340-650q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h126v-96q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v96h126q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H340Zm52 496q-24.75 0-42.37-17.63Q332-189.25 332-214v-83h108q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H332v-114h108q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H332v-53q0-37.5 26.25-63.75T422-610h116q37.5 0 63.75 26.25T628-520v306q0 24.75-17.62 42.37Q592.75-154 568-154H392Z"/>
    </Icon>
  );
});

IconMaterialPediatricsW100Filled.displayName = 'OnesyIconMaterialPediatricsW100Filled';

export default IconMaterialPediatricsW100Filled;
