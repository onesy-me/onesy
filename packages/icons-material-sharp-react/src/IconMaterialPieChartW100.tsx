import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPieChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartW100'

      short_name='PieChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-494h306q-6-125-93.5-213T494-800v306Zm-28 334v-640q-128 5-217 97.5T160-480q0 130 89 222.5T466-160Zm28 0q125-5 212.5-93T800-466H494v306Zm-14-320Zm.17 348q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.67 27.5Q679-773 726-726t74.5 110.38Q828-552.24 828-479.68q0 71.68-27.39 135.04-27.39 63.36-74.35 110.66-46.96 47.3-110.43 74.64Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialPieChartW100.displayName = 'OnesyIconMaterialPieChartW100';

export default IconMaterialPieChartW100;
