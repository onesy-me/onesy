import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOxygenSaturationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturationW100Filled'

      short_name='OxygenSaturation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-445q-47-8-77.5-45T172-576q0-56 39-94.5t95-38.5h34q14 0 23-9t9-23v-98q0-13 8.5-21.5T402-869h156q13 0 21.5 8.5T588-839v98q0 14 9 23t23 9h34q56 0 95 38.5t39 94.5q0 49-30.5 86T680-445H579q5-7 9-14.5t7-15.5q8-23 28.5-34t43.5-11q6 0 10-4t4-10q0-6-4-10t-10-4q-33 0-60 16.5T569-484q-8 25-30 40.5T491-428h-22q-26 0-48-15.5T391-484q-11-31-38-47.5T293-548q-6 0-10 4t-4 10q0 6 4 10t10 4q23 0 43.5 11t28.5 34q3 8 7 15.5t9 14.5H280Zm30 313q-18 0-31-11.5T266-172h-80q-39 0-66.5-27.5T92-266v-120q0-6 4-10t10-4q6 0 10 4t4 10v120q0 27 19.5 46.5T186-200h80q0-17 13-28.5t31-11.5h76v-66q0-6 4-10t10-4q6 0 10 4t4 10v66h132v-66q0-6 4-10t10-4q6 0 10 4t4 10v66h76q18 0 31 11.5t13 28.5h81q27 0 46.5-19.5T841-266v-120q0-6 4-10t10-4q6 0 10 4t4 10v120q0 39-27.5 66.5T775-172h-81q0 17-13 28.5T650-132H310Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturationW100Filled.displayName = 'OnesyIconMaterialOxygenSaturationW100Filled';

export default IconMaterialOxygenSaturationW100Filled;
