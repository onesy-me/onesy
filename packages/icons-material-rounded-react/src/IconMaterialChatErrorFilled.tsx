import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatErrorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatErrorFilled'

      short_name='ChatError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm240-264 76 76q11 11 28 11t28-11q11-11 11-28t-11-28l-76-76 76-76q11-11 11-28t-11-28q-11-11-28-11t-28 11l-76 76-76-76q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l76-76Z"/>
    </Icon>
  );
});

IconMaterialChatErrorFilled.displayName = 'OnesyIconMaterialChatErrorFilled';

export default IconMaterialChatErrorFilled;
