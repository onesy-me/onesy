import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekW100Filled'

      short_name='ViewWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h213v536H132Zm241 0v-536h214v536H373Zm242 0v-536h213v536H615Z"/>
    </Icon>
  );
});

IconMaterialViewWeekW100Filled.displayName = 'OnesyIconMaterialViewWeekW100Filled';

export default IconMaterialViewWeekW100Filled;
