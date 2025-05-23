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
      <path d="M260-640h40v-40q0-17-11.5-28.5T260-720q-17 0-28.5 11.5T220-680q0 17 11.5 28.5T260-640Zm180 0q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680v40h40Zm-59 120h299q50 0 85 35t35 85v160q0 66-47 113T640-80H419q-28 0-52.5-12T325-126L124-381q-8-9-7-21.5t9-20.5q20-21 48-25t52 11l74 45v-168h-40q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 20.5 2t19.5 5v-47q0-17 11.5-28.5T340-880q17 0 29 11.5t12 28.5v56q14-8 28.5-12t30.5-4q50 0 85 35t35 85q0 50-35 85t-85 35h-59v40Z"/>
    </Icon>
  );
});

IconMaterialReminderFilled.displayName = 'OnesyIconMaterialReminderFilled';

export default IconMaterialReminderFilled;
