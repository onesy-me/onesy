import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsHockeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockeyFilled'

      short_name='SportsHockey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-80q0-17 11.5-28.5T120-320h40v160h-40q-17 0-28.5-11.5T80-200Zm120 40v-160h160l34-78 64 140-34 76q-5 11-15 16.5t-21 5.5H200Zm680-40q0 17-11.5 28.5T840-160h-40v-160h40q17 0 28.5 11.5T880-280v80Zm-120 40H572q-11 0-21-5.5T536-182L293-714q-14-30 4-58t51-28q18 0 33 9.5t23 26.5l76 172 76-172q8-17 22.5-26.5T611-800q33 0 51.5 28t4.5 58L544-446l56 126h160v160Z"/>
    </Icon>
  );
});

IconMaterialSportsHockeyFilled.displayName = 'OnesyIconMaterialSportsHockeyFilled';

export default IconMaterialSportsHockeyFilled;
