import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesOtherW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOtherW100Filled'

      short_name='DevicesOther'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-212H132v-536h616v28H160v480h106v28Zm168-68q25 0 42.5-17.5T494-340q0-25-17.5-42.5T434-400q-25 0-42.5 17.5T374-340q0 25 17.5 42.5T434-280Zm394 68H602v-388h226v388Zm-442 0v-54q-18-12-29-31.5T346-340q0-23 11-42.5t29-31.5v-54h96v54q18 12 29 31.5t11 42.5q0 23-11 42.5T482-266v54h-96Z"/>
    </Icon>
  );
});

IconMaterialDevicesOtherW100Filled.displayName = 'OnesyIconMaterialDevicesOtherW100Filled';

export default IconMaterialDevicesOtherW100Filled;
