import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantDirectionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirectionW100'

      short_name='AssistantDirection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.56-92Q399-92 328.27-122.46q-70.72-30.47-123-83Q153-258 122.5-328.5 92-399 92-479.56q0-81.45 30.46-152.27 30.47-70.82 83-123.5Q258-808 328.5-838t151.15-30q81.54 0 152.45 30 70.9 30 123.4 82.5T838-632.1q30 70.91 30 152.45 0 80.65-30 151.15t-82.67 123.04q-52.68 52.53-123.5 83Q561.01-92 479.56-92Zm.44-388Zm-2 254 255-255-255-255-255 255 255 255ZM345-387v-148h244l-70-70 20-20 104 104-104 104-20-20 70-70H373v120h-28Zm135 267q151 0 255.5-104.5T840-480q0-151-104.5-255.5T480-840q-151 0-255.5 104.5T120-480q0 151 104.5 255.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirectionW100.displayName = 'OnesyIconMaterialAssistantDirectionW100';

export default IconMaterialAssistantDirectionW100;
