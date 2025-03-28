import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCycleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CycleW100Filled'

      short_name='Cycle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M162-480q0 103 60 186t158 116q8 2 12 7.5t1 10.5q-4 6-11 8t-14 0q-106-36-170.5-126.5T133-481q0-33 6-65.5t19-63.5l-87 50q-5 3-10.5 1.5T52-565q-3-5-1.5-10.5T57-584l108-62q11-6 23-3t18 14l62 107q3 5 1.5 10.5T263-509q-5 3-10.5 1.5T244-514l-55-94q-14 30-20.5 62.5T162-480Zm318-319q-58 0-111.5 20.5T271-720q-5 5-11.5 5t-9.5-5q-4-6-2-13t7-12q48-40 105-61t119-21q78 0 147 32t119 92v-104q0-6 4-10t10-4q6 0 10 4t4 10v124q0 13-8.5 21.5T743-653H619q-6 0-10-4t-4-10q0-6 4-10t10-4h108q-45-57-110-87.5T480-799Zm238 530q52-59 70.5-134t.5-151q-2-7 1-13t9-6q8 0 13 6t7 14q17 79-3 157t-73 140q-40 47-93.5 77T535-139l87 50q5 3 6.5 8.5T627-70q-3 5-8.5 6.5T608-65l-107-63q-11-6-14-18t3-23l62-106q3-5 8.5-6.5T571-280q5 3 6.5 8.5T576-261l-57 97q58-8 109.5-34.5T718-269Z"/>
    </Icon>
  );
});

IconMaterialCycleW100Filled.displayName = 'OnesyIconMaterialCycleW100Filled';

export default IconMaterialCycleW100Filled;
