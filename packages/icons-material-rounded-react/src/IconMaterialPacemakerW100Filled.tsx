import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPacemakerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PacemakerW100Filled'

      short_name='Pacemaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M269-143q-43 0-73-30t-30-73v-302q-22-21-51-46.5T86-654q0-17 11.5-28.5T126-694q17 0 31 11t23 27q9-16 23-27t31-11q17 0 28.5 11.5T274-654q0 34-29 59.5T194-548v302q0 31 22 53t53 22q31 0 53-22t22-53v-408q0-71 49.5-120.5T514-824q71 0 120.5 49.5T684-654v27q57 5 95.5 47T818-480v200q0 62-43 105t-105 43q-62 0-105-43t-43-105v-200q0-58 38.5-100t95.5-47v-27q0-59-41.5-100.5T514-796q-59 0-100.5 41.5T372-654v408q0 43-30 73t-73 30Zm401-191q-23 0-38.5 15.5T616-280q0 23 15.5 38.5T670-226q23 0 38.5-15.5T724-280q0-23-15.5-38.5T670-334Z"/>
    </Icon>
  );
});

IconMaterialPacemakerW100Filled.displayName = 'OnesyIconMaterialPacemakerW100Filled';

export default IconMaterialPacemakerW100Filled;
