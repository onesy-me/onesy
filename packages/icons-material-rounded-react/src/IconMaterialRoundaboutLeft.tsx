import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutLeft'

      short_name='RoundaboutLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160v-204q0-29 19-51t48-27q57-9 95-53.5T800-600q0-66-47-113t-113-47q-60 0-104.5 38T482-627q-5 29-27 48t-51 19H233l36 36q12 12 11.5 28T268-468q-12 11-28 11.5T212-468L108-572q-6-6-8.5-13T97-600q0-8 2.5-15t8.5-13l104-104q11-11 27.5-11.5T268-732q11 11 11 28t-11 28l-35 36h170q14-86 80.5-143T640-840q100 0 170 70t70 170q0 90-57 156.5T680-363v203q0 17-11.5 28.5T640-120q-17 0-28.5-11.5T600-160Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutLeft.displayName = 'OnesyIconMaterialRoundaboutLeft';

export default IconMaterialRoundaboutLeft;
