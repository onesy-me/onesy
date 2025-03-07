import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMatterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatterW100Filled'

      short_name='Matter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-566q-51 0-96.5-16.5T300-628l26-16q24 17 59 30t81 21v-228l14-9 14 9v228q44-8 79-21t61-30l26 16q-38 29-83.5 45.5T480-566Zm-68 362-27-15q1-5 1-10.5V-240q0-26-7.5-58T357-366L160-248l-14-8v-16l196-118q-28-32-57.5-55.5T226-483v-31q82 32 135 106t53 168q0 9-.5 18t-1.5 18Zm136 0q-1-9-1.5-18t-.5-18q0-94 53-168t135-106v30q-28 12-57.5 36.5T618-390l196 118v16l-14 8-197-118q-14 36-21.5 68t-7.5 58v10.5q0 5.5 1 10.5l-27 15Z"/>
    </Icon>
  );
});

IconMaterialMatterW100Filled.displayName = 'OnesyIconMaterialMatterW100Filled';

export default IconMaterialMatterW100Filled;
