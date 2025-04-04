import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsBikeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBikeW100'

      short_name='DirectionsBike'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-746q-23 0-38.5-15.5T546-800q0-23 15.5-38.5T600-854q23 0 38.5 15.5T654-800q0 23-15.5 38.5T600-746ZM402-546l75 79q8 8 12.5 19t4.5 22v186q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-183L324-526q-9-7-13-15.81-4-8.8-4-21 0-12.19 4.5-20.69Q316-592 324-600l118-118q8-8 19-12.5t23-4.5q12 0 23 4.5t19 12.5l76 76q23 23 54 40t66 24q7 2 11.5 6t4.5 10.5q0 6.5-5 10.5t-11 3q-45-7-80-26t-64-48l-50-50-126 126Zm-182 98q71.4 0 119.7 48.3T388-280q0 71.4-48.3 119.7T220-112q-71.4 0-119.7-48.3T52-280q0-71.4 48.3-119.7T220-448Zm0 308q59 0 99.5-40.5T360-280q0-59-40.5-99.5T220-420q-59 0-99.5 40.5T80-280q0 59 40.5 99.5T220-140Zm520-308q71.4 0 119.7 48.3T908-280q0 71.4-48.3 119.7T740-112q-71.4 0-119.7-48.3T572-280q0-71.4 48.3-119.7T740-448Zm0 308q59 0 99.5-40.5T880-280q0-59-40.5-99.5T740-420q-59 0-99.5 40.5T600-280q0 59 40.5 99.5T740-140Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBikeW100.displayName = 'OnesyIconMaterialDirectionsBikeW100';

export default IconMaterialDirectionsBikeW100;
