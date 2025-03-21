import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantNavigationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantNavigationFilled'

      short_name='AssistantNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM348-295l123-54q5-2 9.5-2t9.5 2l122 54q14 6 25-4.5t5-24.5L501-668q-6-14-21-14t-21 14L318-324q-6 14 5 24.5t25 4.5Z"/>
    </Icon>
  );
});

IconMaterialAssistantNavigationFilled.displayName = 'OnesyIconMaterialAssistantNavigationFilled';

export default IconMaterialAssistantNavigationFilled;
