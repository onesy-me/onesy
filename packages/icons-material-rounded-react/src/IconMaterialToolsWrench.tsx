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
      <path d="m19.275 19.8.7-.7L12 11.125q.475-.575.738-1.3Q13 9.1 13 8.3q0-1.875-1.312-3.175-1.313-1.3-3.188-1.3h-.25L11.325 6.9l-4.25 4.225L4 8.05v.275Q4 10.2 5.312 11.5q1.313 1.3 3.188 1.3.8 0 1.513-.263.712-.262 1.287-.737l7.975 8ZM5.375 3.25q0-.725.775-1.088Q6.925 1.8 8.5 1.8q2.725 0 4.613 1.887Q15 5.575 15 8.3q0 .65-.125 1.287-.125.638-.375 1.213l6.875 6.875q.575.575.588 1.412.012.838-.563 1.413l-.675.7q-.575.6-1.413.612-.837.013-1.437-.587l-6.9-6.9q-.575.25-1.2.363-.625.112-1.25.112-2.725 0-4.612-1.888Q2.025 11.025 2.025 8.3q0-1.6.35-2.362.35-.763 1.075-.763.25 0 .463.087.212.088.387.263L7.075 8.3 8.5 6.9 5.725 4.125q-.175-.175-.262-.4-.088-.225-.088-.475ZM9.2 9Z"/>
    </Icon>
  );
});

IconMaterialToolsWrench.displayName = 'OnesyIconMaterialToolsWrench';

export default IconMaterialToolsWrench;
