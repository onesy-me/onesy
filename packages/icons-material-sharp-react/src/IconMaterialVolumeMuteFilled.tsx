import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeMuteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteFilled'

      short_name='VolumeMute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360v-240h160l200-200v640L440-360H280Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteFilled.displayName = 'OnesyIconMaterialVolumeMuteFilled';

export default IconMaterialVolumeMuteFilled;
