import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTornadoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoFilled'

      short_name='Tornado'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m110-720 46 80h648l46-80q23-40 .5-80T781-840H179q-47 0-69.5 40t.5 80Zm92 160 70 120h416l70-120H202Zm116 200 93 160q23 40 69 40t69-40l93-160H318Z"/>
    </Icon>
  );
});

IconMaterialTornadoFilled.displayName = 'OnesyIconMaterialTornadoFilled';

export default IconMaterialTornadoFilled;
