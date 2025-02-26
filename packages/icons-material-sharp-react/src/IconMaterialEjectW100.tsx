import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEjectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectW100'

      short_name='Eject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-234v-24h440v24H260Zm4-144 216-322 216 322H264Zm216-24Zm-166 0h332L480-650 314-402Z"/>
    </Icon>
  );
});

IconMaterialEjectW100.displayName = 'OnesyIconMaterialEjectW100';

export default IconMaterialEjectW100;
