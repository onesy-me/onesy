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
      <path d="M600-746q-23 0-38.5-15.5T546-800q0-23 15.5-38.5T600-854q23 0 38.5 15.5T654-800q0 23-15.5 38.5T600-746ZM402-546l92 96v224h-28v-197L281-557l161-161q8-8 19-12.5t23-4.5q12 0 23 4.5t19 12.5l76 76q26 26 60.5 43.5T738-576v30q-50-5-89-24.5T578-622l-50-50-126 126Zm-182 98q71.4 0 119.7 48.3T388-280q0 71.4-48.3 119.7T220-112q-71.4 0-119.7-48.3T52-280q0-71.4 48.3-119.7T220-448Zm0 308q59 0 99.5-40.5T360-280q0-59-40.5-99.5T220-420q-59 0-99.5 40.5T80-280q0 59 40.5 99.5T220-140Zm520-308q71.4 0 119.7 48.3T908-280q0 71.4-48.3 119.7T740-112q-71.4 0-119.7-48.3T572-280q0-71.4 48.3-119.7T740-448Zm0 308q59 0 99.5-40.5T880-280q0-59-40.5-99.5T740-420q-59 0-99.5 40.5T600-280q0 59 40.5 99.5T740-140Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBikeW100.displayName = 'OnesyIconMaterialDirectionsBikeW100';

export default IconMaterialDirectionsBikeW100;
