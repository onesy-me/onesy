import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteHistoryFilled'

      short_name='DeleteHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-162q0 17-12 29.5T479-120q-61-1-116-19.5T258-197q-45-35-77-82t-48-104q-5-16 4-30t25-19q16-5 30 3.5t19 24.5q12 45 38 82.5t61 64.5q36 28 80 42.5t89 14.5q17 0 29 11t12 27Zm220-41-56 55q-11 11-27.5 11.5T628-148q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T852-372q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T852-148q-11 11-28 11t-28-11l-56-55ZM480-760q-69 0-129 32t-101 88h70q17 0 28.5 11.5T360-600q0 17-11.5 28.5T320-560H160q-17 0-28.5-11.5T120-600v-160q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v54q51-64 124.5-99T480-840q75 0 140.5 28T735-735q40 40 67 92t35 111q2 17-7.5 30.5T803-486q-17 2-30.5-7.5T757-520q-7-46-27-86t-52-72q-38-38-88.5-60T480-760Zm40 264 48 48q14 14 12.5 29.5T568-392q-11 11-26.5 12.5T512-392l-60-60q-6-6-9-13.5t-3-15.5v-159q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v144Z"/>
    </Icon>
  );
});

IconMaterialDeleteHistoryFilled.displayName = 'OnesyIconMaterialDeleteHistoryFilled';

export default IconMaterialDeleteHistoryFilled;
