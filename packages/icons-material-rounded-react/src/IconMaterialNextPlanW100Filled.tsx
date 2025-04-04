import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNextPlanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlanW100Filled'

      short_name='NextPlan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M642-454h-86q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4h104q12.75 0 21.38-8.63Q690-443.25 690-456v-104q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v86q-38-62-93.5-91T466-594q-72 0-125.5 43T271-443q-2 6 1.67 11.5 3.66 5.5 9.33 5.5 7 0 11-4.5t6-11.5q14-53 60.51-88.5T466-566q42 0 92.5 29t83.5 83ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialNextPlanW100Filled.displayName = 'OnesyIconMaterialNextPlanW100Filled';

export default IconMaterialNextPlanW100Filled;
