import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantNavigationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantNavigationW100'

      short_name='AssistantNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM379-336l94-43q3-2 7-2t7 2l94 43q10 5 18-2.5t3-17.5L495-616q-4.33-11-15.17-11Q469-627 465-616L358-356q-5 10 3 17.5t18 2.5Z"/>
    </Icon>
  );
});

IconMaterialAssistantNavigationW100.displayName = 'OnesyIconMaterialAssistantNavigationW100';

export default IconMaterialAssistantNavigationW100;
