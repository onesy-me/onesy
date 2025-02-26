import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeMute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMute'

      short_name='VolumeMute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360v-240h160l200-200v640L440-360H280Zm80-80h114l86 86v-252l-86 86H360v80Zm100-40Z"/>
    </Icon>
  );
});

IconMaterialVolumeMute.displayName = 'OnesyIconMaterialVolumeMute';

export default IconMaterialVolumeMute;
