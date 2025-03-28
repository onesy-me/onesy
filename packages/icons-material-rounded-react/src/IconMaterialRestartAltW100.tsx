import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestartAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestartAltW100'

      short_name='RestartAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-179q-93-19-152.5-91.5T212-440q0-49 18.5-94.5T281-618q4-5 9-5t10 5q4 4 4 9.5t-4 10.5q-30 32-45 73t-15 85q0 85 53.5 150.5T429-206q5 1 8 5t3 9q0 7-4.5 11t-11.5 2Zm112 2q-7 2-11.5-2t-4.5-11q0-5 3-9t8-6q81-23 135-87t54-148q0-100-70-170t-170-70h-32l60 60q5 5 5 10t-5 10q-5 5-10 5t-10-5l-73-73q-5-5-7-10t-2-11q0-6 2-11t7-10l73-73q5-5 10-5t10 5q5 5 5 10t-5 10l-60 60h32q112 0 190 78t78 190q0 96-60 168t-152 95Z"/>
    </Icon>
  );
});

IconMaterialRestartAltW100.displayName = 'OnesyIconMaterialRestartAltW100';

export default IconMaterialRestartAltW100;
