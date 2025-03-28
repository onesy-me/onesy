import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantDirection = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirection'

      short_name='AssistantDirection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40q-91 0-171.5-34.5t-140-94q-59.5-59.5-94-140T40-480q0-92 34.5-172t94-139.5q59.5-59.5 140-94T480-920q92 0 172 34.5t139.5 94Q851-732 885.5-652T920-480q0 91-34.5 171.5t-94 140Q732-109 652-74.5T480-40Zm0-440Zm-25 311q10 10 23 10t23-10l288-288q10-10 10-24t-10-24L501-793q-10-10-23-10t-23 10L167-505q-10 10-10 24t10 24l288 288Zm-56-312v80q0 17-11.5 28.5T359-361q-17 0-28.5-11.5T319-401v-120q0-18 11-29t29-11h166l-15-16q-11-12-11-28t12-28q11-11 28-11t28 11l84 84q12 12 12 28t-12 28l-84 84q-11 11-28 11t-29-12q-11-11-11-27t11-28l15-16H399Zm81 361q151 0 255.5-104.5T840-480q0-151-104.5-255.5T480-840q-151 0-255.5 104.5T120-480q0 151 104.5 255.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirection.displayName = 'OnesyIconMaterialAssistantDirection';

export default IconMaterialAssistantDirection;
