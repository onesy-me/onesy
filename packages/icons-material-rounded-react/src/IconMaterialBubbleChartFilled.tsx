import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubbleChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChartFilled'

      short_name='BubbleChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm80-280q-92 0-156-64t-64-156q0-92 64-156t156-64q92 0 156 64t64 156q0 92-64 156t-156 64ZM280-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialBubbleChartFilled.displayName = 'OnesyIconMaterialBubbleChartFilled';

export default IconMaterialBubbleChartFilled;
