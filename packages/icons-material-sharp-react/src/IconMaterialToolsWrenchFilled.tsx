import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsWrenchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrenchFilled'

      short_name='ToolsWrench'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.325 22.65-8.35-8.325q-.575.225-1.187.35-.613.125-1.263.125-2.725 0-4.612-1.888Q2.025 11.025 2.025 8.3q0-1.05.313-2.025.312-.975.912-1.8L7.075 8.3 8.5 6.9 4.675 3.05q.85-.625 1.825-.938.975-.312 2-.312 2.725 0 4.613 1.887Q15 5.575 15 8.3q0 .65-.125 1.287-.125.638-.375 1.213l8.35 8.325Z"/>
    </Icon>
  );
});

IconMaterialToolsWrenchFilled.displayName = 'OnesyIconMaterialToolsWrenchFilled';

export default IconMaterialToolsWrenchFilled;
