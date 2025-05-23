import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewMonthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthFilled'

      short_name='CalendarViewMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-540v-180q0-17 11.5-28.5T160-760h133q17 0 28.5 11.5T333-720v180q0 17-11.5 28.5T293-500H160q-17 0-28.5-11.5T120-540Zm293 40q-17 0-28.5-11.5T373-540v-180q0-17 11.5-28.5T413-760h134q17 0 28.5 11.5T587-720v180q0 17-11.5 28.5T547-500H413Zm254 0q-17 0-28.5-11.5T627-540v-180q0-17 11.5-28.5T667-760h133q17 0 28.5 11.5T840-720v180q0 17-11.5 28.5T800-500H667ZM293-200H160q-17 0-28.5-11.5T120-240v-180q0-17 11.5-28.5T160-460h133q17 0 28.5 11.5T333-420v180q0 17-11.5 28.5T293-200Zm120 0q-17 0-28.5-11.5T373-240v-180q0-17 11.5-28.5T413-460h134q17 0 28.5 11.5T587-420v180q0 17-11.5 28.5T547-200H413Zm254 0q-17 0-28.5-11.5T627-240v-180q0-17 11.5-28.5T667-460h133q17 0 28.5 11.5T840-420v180q0 17-11.5 28.5T800-200H667Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthFilled.displayName = 'OnesyIconMaterialCalendarViewMonthFilled';

export default IconMaterialCalendarViewMonthFilled;
