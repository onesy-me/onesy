import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabProfileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileFilled'

      short_name='LabProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-480h320v-80H320v80Zm0-160h320v-80H320v80Zm480 502L599-400H160v-480h640v742ZM160-80v-240h400L744-80H160Z"/>
    </Icon>
  );
});

IconMaterialLabProfileFilled.displayName = 'OnesyIconMaterialLabProfileFilled';

export default IconMaterialLabProfileFilled;
