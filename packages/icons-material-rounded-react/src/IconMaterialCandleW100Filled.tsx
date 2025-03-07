import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCandleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandleW100Filled'

      short_name='Candle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M483.15-659q-34.15 0-57.65-24.5T404-742.43q2-31.57 19-58.07t39-47.5q5-5 10.5-7t10.5-2q5 0 10.5 2.5T504-848q22 21 39 47t19 58.1q2 35.02-21.35 59.46Q517.31-659 483.15-659ZM789-273q21 0 36-15t15-36.5q0-21.5-15-36.5t-36-15q-21 0-36 15t-15 36.5q0 21.5 15 36.5t36 15Zm-85 141H262q-37.5 0-63.75-26.25T172-222v-21q0-12.75 8.63-21.38Q189.25-273 202-273h193v-241q0-24.75 17.63-42.38Q430.25-574 455-574h56q24.75 0 42.38 17.62Q571-538.75 571-514v241h158q-9-11-14-24.05-5-13.04-5-27.95 0-33.04 22.97-56.02 22.98-22.98 56-22.98Q822-404 845-381.02T868-325q0 32-21.5 55T794-245v23q0 37.5-26.25 63.75T704-132Z"/>
    </Icon>
  );
});

IconMaterialCandleW100Filled.displayName = 'OnesyIconMaterialCandleW100Filled';

export default IconMaterialCandleW100Filled;
