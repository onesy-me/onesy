import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermMediaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaW100Filled'

      short_name='PermMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-184q-25 0-42.5-17.5T92-244v-406q0-6 4-10t10-4q6 0 10 4t4 10v406q0 14 9 23t23 9h582q6 0 10 4t4 10q0 6-4 10t-10 4H152Zm108-108q-25 0-42.5-17.5T200-352v-416q0-25 17.5-42.5T260-828h173q12 0 23.5 5t19.5 13l62 62h270q25 0 42.5 17.5T868-688v336q0 25-17.5 42.5T808-292H260Zm254-160-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109Z"/>
    </Icon>
  );
});

IconMaterialPermMediaW100Filled.displayName = 'OnesyIconMaterialPermMediaW100Filled';

export default IconMaterialPermMediaW100Filled;
