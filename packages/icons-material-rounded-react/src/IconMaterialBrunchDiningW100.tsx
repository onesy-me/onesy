import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrunchDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningW100'

      short_name='BrunchDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-160h480q0 11-8.5 19.5T584-132H160q-11 0-19.5-8.5T132-160Zm0-100q0-11 8.5-19.5T160-288h132v-6q0-12.75 8.63-21.38Q309.25-324 322-324h100q12.75 0 21.38 8.62Q452-306.75 452-294v6h132q11 0 19.5 8.5T612-260H132Zm608-122q-26-21-45-55.5T676-514v-284q0-12.75 8.63-21.38Q693.25-828 706-828h92q12.75 0 21.38 8.62Q828-810.75 828-798v284q0 42-17 76.5T768-382v222h46q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-44q-12.75 0-21.37-8.63Q740-149.25 740-162v-220Zm-36-238h96v-180h-96v180Zm50 210q18-12 32-41.5t14-62.5v-78h-96v78q0 33 16 62.5t34 41.5Zm-2 0Z"/>
    </Icon>
  );
});

IconMaterialBrunchDiningW100.displayName = 'OnesyIconMaterialBrunchDiningW100';

export default IconMaterialBrunchDiningW100;
