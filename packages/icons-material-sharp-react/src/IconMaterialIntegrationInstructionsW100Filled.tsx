import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIntegrationInstructionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IntegrationInstructionsW100Filled'

      short_name='IntegrationInstructions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-374 20-20-86-86 86-86-20-20-106 106 106 106Zm192 0 106-106-106-106-20 20 86 86-86 86 20 20ZM172-172v-616h254q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h254v616H172Zm308-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialIntegrationInstructionsW100Filled.displayName = 'OnesyIconMaterialIntegrationInstructionsW100Filled';

export default IconMaterialIntegrationInstructionsW100Filled;
