import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReminderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReminderFilled'

      short_name='Reminder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-640h40v-40q0-17-11.5-28.5T260-720q-17 0-28.5 11.5T220-680q0 17 11.5 28.5T260-640Zm180 0q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680v40h40Zm-59 120h419v440H361L107-403l64-67 129 78v-168h-40q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 20.5 2t19.5 5v-87h81v96q14-8 28.5-12t30.5-4q50 0 85 35t35 85q0 50-35 85t-85 35h-59v40Z"/>
    </Icon>
  );
});

IconMaterialReminderFilled.displayName = 'OnesyIconMaterialReminderFilled';

export default IconMaterialReminderFilled;
