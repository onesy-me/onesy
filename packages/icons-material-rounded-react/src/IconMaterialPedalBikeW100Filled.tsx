import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPedalBikeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeW100Filled'

      short_name='PedalBike'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200.45-186q-74.14 0-124.29-50.02Q26-286.05 26-360q0-72 50.9-124 50.89-52 123.1-52 66 0 117 46.5T374-374h84l-90-252h-48q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h120q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-42l32 90h250l-70-192q-3-9-10-13.5t-16-4.5h-64q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h64q17 0 31.35 9.69Q629.7-754.62 636-738l74 202h50q72.21 0 123.1 50.9Q934-434.21 934-362q0 72.36-51 123.18Q832-188 760-188q-68 0-117-45.5T586-346H374q-6 69-57.5 114.5T200.45-186ZM346-346v-28H240q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106Zm144-28h96q3-29 22.5-71.5T666-508H440l50 134Zm206-118 35 99q1.81 5.33 7.4 7.67Q744-383 749-385t7.5-7.5q2.5-5.5.5-10.5l-37-99-24 10Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeW100Filled.displayName = 'OnesyIconMaterialPedalBikeW100Filled';

export default IconMaterialPedalBikeW100Filled;
