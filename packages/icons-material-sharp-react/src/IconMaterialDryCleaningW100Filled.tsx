import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDryCleaningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningW100Filled'

      short_name='DryCleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M319-132v-223H172v-111l294-131v-57q-32-5-53-29.5T392-740q0-36.67 25.53-62.33 25.53-25.67 62-25.67t61.97 26q25.5 26 25.5 62h-30q0-25.5-16.39-42.75Q504.23-800 480-800q-25.5 0-42.75 17.25T420-740q0 25.5 17.25 42.75T480-680h14v83l294 132v110H641v223H319ZM200-383h119v-37h322v37h119v-64L480-572 200-447v64Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningW100Filled.displayName = 'OnesyIconMaterialDryCleaningW100Filled';

export default IconMaterialDryCleaningW100Filled;
