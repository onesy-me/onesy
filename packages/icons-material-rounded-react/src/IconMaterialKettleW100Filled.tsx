import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKettleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleW100Filled'

      short_name='Kettle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-320v-383l-58-77q-11-15-2.81-31.5T258-828h396q14.13 0 24.07 9.93Q688-808.13 688-794v86h80q24.75 0 42.38 17.62Q828-672.75 828-648v200q0 24.75-17.62 42.37Q792.75-388 768-388h-80v68q0 24.75-17.62 42.37Q652.75-260 628-260H352q-24.75 0-42.37-17.63Q292-295.25 292-320Zm396-96h80q14 0 23-9t9-23v-200q0-14-9-23t-23-9h-80v264ZM550-720q-12.5 0-21.25 8.75T520-690v292q0 12.5 8.75 21.25T550-368q12.5 0 21.25-8.75T580-398v-292q0-12.5-8.75-21.25T550-720ZM186-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h588q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Z"/>
    </Icon>
  );
});

IconMaterialKettleW100Filled.displayName = 'OnesyIconMaterialKettleW100Filled';

export default IconMaterialKettleW100Filled;
