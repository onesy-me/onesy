import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneCallbackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneCallbackFilled'

      short_name='PhoneCallback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM520-520v-240h80v104l200-200 56 56-200 200h104v80H520Z"/>
    </Icon>
  );
});

IconMaterialPhoneCallbackFilled.displayName = 'OnesyIconMaterialPhoneCallbackFilled';

export default IconMaterialPhoneCallbackFilled;
