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
      <path d="M268-426h28q9-59 57-99.5T466-566q42 0 92.5 29t83.5 83H542v28h148v-148h-28v100q-38-62-93.5-91T466-594q-77 0-132 48.5T268-426Zm212.17 294q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialNextPlanW100Filled.displayName = 'OnesyIconMaterialNextPlanW100Filled';

export default IconMaterialNextPlanW100Filled;
