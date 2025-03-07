import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatRead = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatRead'

      short_name='MarkChatRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m694-273 142-142q12-12 28-11.5t28 12.5q11 12 11.5 28T892-358L722-188q-12 12-28 12t-28-12l-85-86q-11-11-11.5-27.5T581-330q11-11 28-11t28 11l57 57Zm-454 33-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240q0 17-11.5 28.5T840-520q-17 0-28.5-11.5T800-560v-240H160v525l46-45h234q17 0 28.5 11.5T480-280q0 17-11.5 28.5T440-240H240Zm-80-80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMarkChatRead.displayName = 'OnesyIconMaterialMarkChatRead';

export default IconMaterialMarkChatRead;
