import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOutW100Filled'

      short_name='StepOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.12-106q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM466-763 345-644q-4 4-9 3.5t-9.17-4.5q-3.83-3.67-3.83-9.33 0-5.67 4-9.67l132-132q9-9 21-9t21 9l132 132q4 4 4.5 10t-4.5 10q-4 4-10 3.5t-10-4.5L494-764v350q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-349Z"/>
    </Icon>
  );
});

IconMaterialStepOutW100Filled.displayName = 'OnesyIconMaterialStepOutW100Filled';

export default IconMaterialStepOutW100Filled;
