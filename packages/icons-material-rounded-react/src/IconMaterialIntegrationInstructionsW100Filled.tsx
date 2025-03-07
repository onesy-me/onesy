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
      <path d="m318-480 76-76q4-4 4.5-9.5T394-576q-5-5-10-5t-10 5l-75 75q-9 9-9 21t9 21l75 75q4 4 9.5 4.5T394-384q5-5 5-10t-5-10l-76-76Zm324 0-76 76q-4 4-4.5 9.5T566-384q5 5 10 5t10-5l75-75q9-9 9-21t-9-21l-75-75q-4-4-9.5-4.5T566-576q-5 5-5 10t5 10l76 76ZM232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h194q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h194q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm248-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialIntegrationInstructionsW100Filled.displayName = 'OnesyIconMaterialIntegrationInstructionsW100Filled';

export default IconMaterialIntegrationInstructionsW100Filled;
