import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitEnterexitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitW100Filled'

      short_name='TransitEnterexit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-328h212q11 0 19.5 8.03t8.5 19.5q0 11.47-8.5 19.97Q597-272 586-272H308q-12.75 0-21.37-8.63Q278-289.25 278-302v-278q0-11 8.03-19.5t19.5-8.5q11.47 0 19.97 8.5Q334-591 334-580v212l288-288q8.23-8 20.11-8 11.89 0 19.89 8.18t8 20q0 11.82-8 19.82L374-328Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitW100Filled.displayName = 'OnesyIconMaterialTransitEnterexitW100Filled';

export default IconMaterialTransitEnterexitW100Filled;
