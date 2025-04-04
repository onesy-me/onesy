import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSleepScoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepScoreW100Filled'

      short_name='SleepScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-835q106 0 180 74t74 180h-28q0-45-16.5-85T744-736l-16 28q-10 16-21.5 35.5T682-639q-8 8-18 8t-18-8q-8-8-8-18.5t8-18.5q13-14 33-24.5t36-20.5l28-17q-31-32-73-50.5T580-807v-28Zm-97 703q-73 0-137-27.5T234-235q-48-48-75.5-112T131-484q0-108 59.5-196.5T350-809q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T483-132Z"/>
    </Icon>
  );
});

IconMaterialSleepScoreW100Filled.displayName = 'OnesyIconMaterialSleepScoreW100Filled';

export default IconMaterialSleepScoreW100Filled;
