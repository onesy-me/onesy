import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsWrench = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrench'

      short_name='ToolsWrench'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.275 19.775.7-.7-7.95-7.975q.45-.575.713-1.288Q13 9.1 13 8.3q0-1.875-1.312-3.175-1.313-1.3-3.188-1.3h-.25L11.325 6.9 9.2 9l-2.125 2.125L4 8.05v.275Q4 10.2 5.312 11.5q1.313 1.3 3.188 1.3.8 0 1.525-.263.725-.262 1.3-.737Zm.05 2.875-8.35-8.325q-.575.225-1.187.35-.613.125-1.263.125-2.725 0-4.612-1.888Q2.025 11.025 2.025 8.3q0-1.05.313-2.025.312-.975.912-1.8L7.075 8.3 8.5 6.9 4.675 3.05q.85-.625 1.825-.938.975-.312 2-.312 2.725 0 4.613 1.887Q15 5.575 15 8.3q0 .65-.125 1.287-.125.638-.375 1.213l8.35 8.325ZM9.2 9Z"/>
    </Icon>
  );
});

IconMaterialToolsWrench.displayName = 'OnesyIconMaterialToolsWrench';

export default IconMaterialToolsWrench;
