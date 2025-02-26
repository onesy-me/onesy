import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFmdBadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadW100'

      short_name='FmdBad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-459h28v-236h-28v236Zm14 106q8.5 0 14.25-5.75T500-373q0-8.5-5.75-14.25T480-393q-8.5 0-14.25 5.75T460-373q0 8.5 5.75 14.25T480-353Zm0 184q110-94 177.5-198.5T725-547q0-110-69.5-182T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169Zm0 38Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 85-69 190T480-131Zm0-423Z"/>
    </Icon>
  );
});

IconMaterialFmdBadW100.displayName = 'OnesyIconMaterialFmdBadW100';

export default IconMaterialFmdBadW100;
