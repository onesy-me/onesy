import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatReadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadFilled'

      short_name='MarkChatRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m694-273 142-142q12-12 28-11.5t28 12.5q11 12 11.5 28T892-358L722-188q-12 12-28 12t-28-12l-85-86q-11-11-11.5-27.5T581-330q11-11 28-11t28 11l57 57Zm-454 33-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240q0 17-11.5 28.5T840-520H560q-33 0-56.5 23.5T480-440v160q0 17-11.5 28.5T440-240H240Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadFilled.displayName = 'OnesyIconMaterialMarkChatReadFilled';

export default IconMaterialMarkChatReadFilled;
