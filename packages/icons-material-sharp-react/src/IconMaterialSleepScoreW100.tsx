import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSleepScoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepScoreW100'

      short_name='SleepScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-835q106 0 180 73.93T834-581h-28q0-45-16.5-85T744-736l-16 28q-10 16.24-21.5 35.51Q695-653.21 682-639q-8 8-18 8t-18-8q-8-8-8-18.68 0-10.69 8-18.32 13-14 32.85-24.66Q698.71-711.31 715-721l28-17q-31-32-72.78-50.5T580-807v-28Zm-97 703q-73.09 0-137.05-27.5Q282-187 234-235t-75.5-111.95Q131-410.91 131-484q0-108 59.5-196.5T350-809q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T483-132Zm0-28q88 0 163-44t118-121.28q-86-8.03-163-43.65-77-35.63-138-96.85Q402-527 366-603.5T323-766q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-306Z"/>
    </Icon>
  );
});

IconMaterialSleepScoreW100.displayName = 'OnesyIconMaterialSleepScoreW100';

export default IconMaterialSleepScoreW100;
