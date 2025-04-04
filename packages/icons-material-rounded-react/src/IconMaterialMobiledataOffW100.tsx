import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobiledataOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobiledataOffW100'

      short_name='MobiledataOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m374-226 80-80q5-5 10-5t10 5q5 5 5 10t-5 10l-93 93q-5 5-10 7t-11 2q-6 0-11-2t-10-7l-93-93q-5-5-5-10t5-10q5-5 10-5t10 5l80 80v-348L142-778q-5-5-5-10t5-10q5-5 10-5t10 5l634 634q5 5 5 10t-5 10q-5 5-10 5t-10-5L374-546v320Zm226-254q-6 0-10-4t-4-10v-240l-80 80q-5 5-10 5t-10-5q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q5 5 5 10t-5 10q-5 5-10 5t-10-5l-80-80v240q0 6-4.5 10t-9.5 4Z"/>
    </Icon>
  );
});

IconMaterialMobiledataOffW100.displayName = 'OnesyIconMaterialMobiledataOffW100';

export default IconMaterialMobiledataOffW100;
