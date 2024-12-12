import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsHockeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockeyW100'

      short_name='SportsHockey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-206v-68h60v68h-60Zm100 0v-68h170l42-94 16 34-58 128H220Zm560 0v-68h60v68h-60Zm-40 0H570L326-754h30l124 278 124-278h30L496-442l74 168h170v68Z"/>
    </Icon>
  );
});

IconMaterialSportsHockeyW100.displayName = 'OnesyIconMaterialSportsHockeyW100';

export default IconMaterialSportsHockeyW100;
