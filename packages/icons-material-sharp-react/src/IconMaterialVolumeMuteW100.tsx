import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeMuteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteW100'

      short_name='VolumeMute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-412v-136h130l126-126v388L462-412H332Zm28-28h114l86 86v-252l-86 86H360v80Zm100-40Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteW100.displayName = 'OnesyIconMaterialVolumeMuteW100';

export default IconMaterialVolumeMuteW100;
