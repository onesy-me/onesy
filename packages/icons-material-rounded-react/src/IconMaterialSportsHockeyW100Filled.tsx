import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsHockeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockeyW100Filled'

      short_name='SportsHockey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-234v-12q0-11 8.5-19.5T148-274h32v68h-32q-11 0-19.5-8.5T120-234Zm100 28v-68h170l42-94 16 34-48 106q-5 11-15 16.5t-21 5.5H220Zm620-28q0 11-8.5 19.5T812-206h-32v-68h32q11 0 19.5 8.5T840-246v12Zm-100 28H596q-11 0-21-5.5T560-228L335-735q-3-7 .5-13t11.5-6q4 0 7.5 2t5.5 6l120 270 120-270q2-4 5.5-6t7.5-2q8 0 11.5 6t.5 13L496-442l74 168h170v68Z"/>
    </Icon>
  );
});

IconMaterialSportsHockeyW100Filled.displayName = 'OnesyIconMaterialSportsHockeyW100Filled';

export default IconMaterialSportsHockeyW100Filled;
