import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBodyFatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodyFatW100Filled'

      short_name='BodyFat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M661-200 207-426q-17.25-8.37-25.12-23.21-7.88-14.83-7.88-30.81 0-15.98 7.88-30.49Q189.75-525.02 207-533l454-226q15-8 30.58-6.92 15.58 1.08 28.5 9t20.42 20.74Q748-723.35 748-706v92h26q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-80q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h26v-90q0-18-15-27.5t-31-1.5l-160 78.97q27 39.03 43.5 83.11T574-480q0 48-16.5 92.5T514-304l159 79q16 8 31-1.5t15-27.5v-92h-25q-6.1 0-10.05-4.04-3.95-4.03-3.95-10 0-5.96 4.03-9.96 4.02-4 9.97-4h80q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-26v92q0 17.35-7.5 30.18Q733-211 720-203t-28.5 9.5Q676-192 661-200ZM488-317q26-36 42-77t16-85.61q0-44.61-15.5-85.5T489-641L220-509q-18 9-18 29t18 29l268 134Z"/>
    </Icon>
  );
});

IconMaterialBodyFatW100Filled.displayName = 'OnesyIconMaterialBodyFatW100Filled';

export default IconMaterialBodyFatW100Filled;
