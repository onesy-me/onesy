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
      <path d="M480-40q-91 0-171.5-34.5t-140-94q-59.5-59.5-94-140T40-480q0-92 34.5-172t94-139.5q59.5-59.5 140-94T480-920q92 0 172 34.5t139.5 94Q851-732 885.5-652T920-480q0 91-34.5 171.5t-94 140Q732-109 652-74.5T480-40Zm0-440Zm-2 334 335-335-335-335-335 335 335 335ZM319-361v-200h206l-42-44 56-56 140 140-140 140-56-56 42-44H399v120h-80Zm161 241q151 0 255.5-104.5T840-480q0-151-104.5-255.5T480-840q-151 0-255.5 104.5T120-480q0 151 104.5 255.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirection.displayName = 'OnesyIconMaterialAssistantDirection';

export default IconMaterialAssistantDirection;
