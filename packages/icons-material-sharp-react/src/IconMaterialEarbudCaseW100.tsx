import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudCaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudCaseW100'

      short_name='EarbudCase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-172q-51.15 0-87.57-36.43Q172-244.85 172-296v-367q0-51.56 36-88.28T296-788h367q51.56 0 88.28 36.72T788-663v367q0 52-36.72 88T663-172H296Zm-96-330v206q0 39.6 28.2 67.8Q256.4-200 296-200h367q40.01 0 68.51-28.2Q760-256.4 760-296v-206H641v147H319v-147H200Zm147 0v119h266v-119H347Zm-147-28h560v-133q0-41-28-69t-69-28H296q-39.6 0-67.8 28.49Q200-703.01 200-663v133Z"/>
    </Icon>
  );
});

IconMaterialEarbudCaseW100.displayName = 'OnesyIconMaterialEarbudCaseW100';

export default IconMaterialEarbudCaseW100;
