import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublishedWithChangesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishedWithChangesW100'

      short_name='PublishedWithChanges'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-748q-75 50-110.5 120T160-480q0 109 65 195t175 115q6 2 10 7t4 11q0 6-5 9.5t-10 1.5q-119-30-193-123t-74-216q0-85 37.5-158.5T285-768H173q-6 0-10-4t-4-10q0-6 4-10t10-4h131q13 0 21.5 8.5T334-766v131q0 6-4 10t-10 4q-6 0-10-4t-4-10v-113Zm117 376 217-217q4-4 9.5-4.5T660-589q5 5 5 10t-5 10L444-353q-9 9-21 9t-21-9L300-455q-4-4-4.5-9.5T300-475q5-5 10-5t10 5l103 103Zm252 181h112q6 0 10 4t4 10q0 6-4 10t-10 4H656q-13 0-21.5-8.5T626-193v-131q0-6 4-10t10-4q6 0 10 4t4 10v113q74-51 110-121t36-148q0-109-65-195T560-790q-6-2-10-6.5t-4-10.5q0-6 5-10t10-2q119 29 193 122.5T828-480q0 85-37.5 159T675-191Z"/>
    </Icon>
  );
});

IconMaterialPublishedWithChangesW100.displayName = 'OnesyIconMaterialPublishedWithChangesW100';

export default IconMaterialPublishedWithChangesW100;
