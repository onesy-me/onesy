import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactlessOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessOffFilled'

      short_name='ContactlessOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M555-283q17 7 32.5.5T608-305q3-9 5.5-18.5T618-342l-69-69q-2 20-6 39.5T532-333q-5 15 2 29.5t21 20.5Zm-129-52q16 6 31-.5t20-21.5q8-26 12.5-53.5T494-466l-85-86q4 17 5 35t1 37q0 24-2.5 47t-9.5 46q-5 17 1.5 31.5T426-335Zm-130-55q17 7 32 0t19-24q4-16 6-32.5t2-33.5q0-17-2-33.5t-6-32.5q-4-17-19-24t-32 0q-14 5-21 19.5t-4 30.5q2 10 3 20t1 20q0 10-1 20t-3 20q-3 16 4 30t21 20ZM479-80q-83 0-156-31.5T196-197q-54-54-85.5-127T79-480q0-65 19-123.5T152-711h98l564 565H700L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l734 735q12 12 12.5 28.5T847-57q-12 12-28.5 12T790-57l-90-89q-48 32-103.5 49T479-80Zm324-212q-10 0-19.5-4T766-308L633-441q2-10 2-19.5V-480q0-46-6.5-89.5T608-655q-5-16-21-23t-33 1q-14 6-20.5 20.5T532-627q8 25 13.5 51.5T553-521L307-767q-8-8-11.5-17t-3.5-19q0-14 6.5-25.5T319-847q37-17 77-25t83-8q83 0 156 31.5T762-763q54 54 85.5 127T879-480q0 43-8.5 83T846-320q-6 14-17.5 21t-25.5 7Z"/>
    </Icon>
  );
});

IconMaterialContactlessOffFilled.displayName = 'OnesyIconMaterialContactlessOffFilled';

export default IconMaterialContactlessOffFilled;
