import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTornadoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoW100Filled'

      short_name='Tornado'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m182-698 49 84h498l49-84q17-30 0-60t-52-30H234q-35 0-52 30t0 60Zm65 112 100 172h266l100-172H247Zm116 200 65 113q17 30 52 30t52-30l65-113H363Z"/>
    </Icon>
  );
});

IconMaterialTornadoW100Filled.displayName = 'OnesyIconMaterialTornadoW100Filled';

export default IconMaterialTornadoW100Filled;
