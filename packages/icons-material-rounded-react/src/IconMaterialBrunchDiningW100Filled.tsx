import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrunchDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningW100Filled'

      short_name='BrunchDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-160h480q0 11-8.5 19.5T584-132H160q-11 0-19.5-8.5T132-160Zm0-100q0-11 8.5-19.5T160-288h132v-6q0-13 8.5-21.5T322-324h100q13 0 21.5 8.5T452-294v6h132q11 0 19.5 8.5T612-260H132Zm608-122q-26-21-45-55.5T676-514v-284q0-13 8.5-21.5T706-828h92q13 0 21.5 8.5T828-798v284q0 42-17 76.5T768-382v222h46q6 0 10 4t4 10q0 6-4 10t-10 4h-44q-13 0-21.5-8.5T740-162v-220Zm-36-238h96v-180h-96v180Z"/>
    </Icon>
  );
});

IconMaterialBrunchDiningW100Filled.displayName = 'OnesyIconMaterialBrunchDiningW100Filled';

export default IconMaterialBrunchDiningW100Filled;
