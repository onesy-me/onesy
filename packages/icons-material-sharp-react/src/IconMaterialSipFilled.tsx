import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipFilled'

      short_name='Sip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360h80v-240h-80v240Zm120 0h60v-80h140v-160H560v240Zm-360 0h200v-150H260v-30h140v-60H200v150h140v30H200v60Zm420-140v-40h80v40h-80ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialSipFilled.displayName = 'OnesyIconMaterialSipFilled';

export default IconMaterialSipFilled;
