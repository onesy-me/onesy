import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIntegrationInstructionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IntegrationInstructionsFilled'

      short_name='IntegrationInstructions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-336 56-58-86-86 86-86-56-58-144 144 144 144Zm192 0 144-144-144-144-56 58 86 86-86 86 56 58ZM120-120v-720h248q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h248v720H120Zm360-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Z"/>
    </Icon>
  );
});

IconMaterialIntegrationInstructionsFilled.displayName = 'OnesyIconMaterialIntegrationInstructionsFilled';

export default IconMaterialIntegrationInstructionsFilled;
