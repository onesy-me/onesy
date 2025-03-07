import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvGenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenW100Filled'

      short_name='TvGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m227-252-19 48q-.83 1.71-2.92 2.86Q203-200 200.67-200h-2q-2.67 0-4.67-2.1t-2-4.9v-45q-24.75 0-42.37-17.63Q132-287.25 132-312v-376q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v376q0 24.81-17.62 42.48-17.63 17.66-42.38 17.66V-206q0 2.53-1.74 4.26Q764.53-200 762-200h-2.8q-2.4 0-4.4-1.08-2-1.07-2.8-2.92l-17-48H227Z"/>
    </Icon>
  );
});

IconMaterialTvGenW100Filled.displayName = 'OnesyIconMaterialTvGenW100Filled';

export default IconMaterialTvGenW100Filled;
