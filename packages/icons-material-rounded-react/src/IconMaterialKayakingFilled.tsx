import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKayakingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KayakingFilled'

      short_name='Kayaking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40q-17 0-28.5-11.5T80-80q0-17 11.5-28.5T120-120q26 0 51.5-6.5T220-147q9-5 20-5t20 5q23 14 48.5 20.5T360-120q26 0 51.5-6.5T460-147q9-5 20.5-5t19.5 5q23 14 48.5 20.5T600-120q26 0 51.5-6.5T700-147q8-5 20-5t20 5q23 14 48.5 20.5T840-120q17 0 28.5 11.5T880-80q0 17-11.5 28.5T840-40q-31 0-61-7.5T720-70q-29 15-59 22.5T600-40q-31 0-61-7.5T480-70q-29 15-59 22.5T360-40q-31 0-61-7.5T240-70q-29 15-59 22.5T120-40Zm360-540q-33 0-56.5-23.5T400-660q0-33 23.5-56.5T480-740q33 0 56.5 23.5T560-660q0 33-23.5 56.5T480-580ZM360-200q-27 0-51-10t-44-26q-11-9-25.5-9t-25.5 9q-13 10-27 18t-30 13l-28-8q-14-4-28-9-29-9-29-38t29-38q44-14 91.5-25.5T285-343l54-167q11-34 41.5-45t57.5 3l102 52 113-60 66-148-14-38q-2-8-2-15t3-15l30-67q7-16 22.5-22t30.5 1l54 25q16 7 22 22.5t-1 30.5l-30 67q-3 8-9 13t-14 8l-37 14-148 334q59 7 119.5 21T859-298q28 9 28 38t-28 38q-14 5-28.5 9t-27.5 8q-16-5-30.5-12.5T745-236q-11-9-25-9t-25 9q-20 16-44 26t-51 10q-27 0-51-10t-44-26q-11-9-25-9t-25 9q-20 16-44 26t-51 10Zm203-157 38-85-61 32-70-36-28 86h38q21 0 42 .5t41 2.5Z"/>
    </Icon>
  );
});

IconMaterialKayakingFilled.displayName = 'OnesyIconMaterialKayakingFilled';

export default IconMaterialKayakingFilled;
