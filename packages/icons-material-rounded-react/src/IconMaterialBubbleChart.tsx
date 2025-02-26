import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubbleChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChart'

      short_name='BubbleChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T620-240q0-17-11.5-28.5T580-280q-17 0-28.5 11.5T540-240q0 17 11.5 28.5T580-200Zm80-200q-92 0-156-64t-64-156q0-92 64-156t156-64q92 0 156 64t64 156q0 92-64 156t-156 64Zm0-80q59 0 99.5-40.5T800-620q0-59-40.5-99.5T660-760q-59 0-99.5 40.5T520-620q0 59 40.5 99.5T660-480ZM280-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-400q0-33-23.5-56.5T280-480q-33 0-56.5 23.5T200-400q0 33 23.5 56.5T280-320Zm300 80Zm80-380ZM280-400Z"/>
    </Icon>
  );
});

IconMaterialBubbleChart.displayName = 'OnesyIconMaterialBubbleChart';

export default IconMaterialBubbleChart;
