import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantDirection = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirection'

      short_name='AssistantDirection'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,3c-4.99,0-9,4.01-9,9s4.01,9,9,9s9-4.01,9-9S16.99,3,12,3z M12.54,19.8c-0.35,0.27-0.79,0.27-1.15,0 L4.2,12.58c-0.27-0.36-0.27-0.8,0-1.16l7.19-7.22c0.35-0.27,0.79-0.27,1.15,0l7.19,7.22c0.36,0.27,0.36,0.8,0,1.16L12.54,19.8z" opacity=".3"/><path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z M12,21c-4.99,0-9-4.01-9-9s4.01-9,9-9s9,4.01,9,9 S16.99,21,12,21z"/><path d="M19.73,11.42L12.54,4.2c-0.36-0.27-0.8-0.27-1.15,0L4.2,11.42c-0.27,0.36-0.27,0.8,0,1.16l7.19,7.22 c0.36,0.27,0.8,0.27,1.15,0l7.19-7.22C20.09,12.22,20.09,11.69,19.73,11.42z M13.5,14.5V12H10v3H8v-4c0-0.6,0.4-1,1-1h4.5V7.5 L17,11L13.5,14.5z"/></g></g>
    </Icon>
  );
});

IconMaterialAssistantDirection.displayName = 'OnesyIconMaterialAssistantDirection';

export default IconMaterialAssistantDirection;
