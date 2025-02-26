import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbTwilightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilightW100'

      short_name='WbTwilight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m714-572-20-20 64-64 20 20-64 64ZM106-186v-28h748v28H106Zm360-482v-88h28v88h-28Zm-220 96-64-64 20-20 64 64-20 20Zm51 172h366q-23-54-72.5-87T480-520q-61 0-110.5 33T297-400Zm-39 28q18-78 80-127t142-49q80 0 142 49t80 127H258Zm222-28Z"/>
    </Icon>
  );
});

IconMaterialWbTwilightW100.displayName = 'OnesyIconMaterialWbTwilightW100';

export default IconMaterialWbTwilightW100;
