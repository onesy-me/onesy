import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermContactCalendarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarFilled'

      short_name='PermContactCalendar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-206q54-53 125.5-83.5T480-320q83 0 154.5 30.5T760-206v-514H200v514Zm280-194q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarFilled.displayName = 'OnesyIconMaterialPermContactCalendarFilled';

export default IconMaterialPermContactCalendarFilled;
