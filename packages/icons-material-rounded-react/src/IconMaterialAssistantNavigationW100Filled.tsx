import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantNavigationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantNavigationW100Filled'

      short_name='AssistantNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM379-336l94-43q3-2 7-2t7 2l94 43q10 5 18-2.5t3-17.5L495-616q-4.33-11-15.17-11Q469-627 465-616L358-356q-5 10 3 17.5t18 2.5Z"/>
    </Icon>
  );
});

IconMaterialAssistantNavigationW100Filled.displayName = 'OnesyIconMaterialAssistantNavigationW100Filled';

export default IconMaterialAssistantNavigationW100Filled;
