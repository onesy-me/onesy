import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewMonthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarViewMonthW100Filled'

      short_name='CalendarViewMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-526v-162q0-14 9-23t23-9h131q13 0 22.5 9.5T355-688v162q0 13-9.5 22.5T323-494H192q-13 0-22.5-9.5T160-526Zm255 32q-13 0-22.5-9.5T383-526v-162q0-13 9.5-22.5T415-720h130q13 0 22.5 9.5T577-688v162q0 13-9.5 22.5T545-494H415Zm222 0q-13 0-22.5-9.5T605-526v-162q0-13 9.5-22.5T637-720h131q14 0 23 9t9 23v162q0 13-9.5 22.5T768-494H637ZM323-240H192q-14 0-23-9t-9-23v-162q0-13 9.5-22.5T192-466h131q13 0 22.5 9.5T355-434v162q0 13-9.5 22.5T323-240Zm92 0q-13 0-22.5-9.5T383-272v-162q0-13 9.5-22.5T415-466h130q13 0 22.5 9.5T577-434v162q0 13-9.5 22.5T545-240H415Zm222 0q-13 0-22.5-9.5T605-272v-162q0-13 9.5-22.5T637-466h131q13 0 22.5 9.5T800-434v162q0 14-9 23t-23 9H637Z"/>
    </Icon>
  );
});

IconMaterialCalendarViewMonthW100Filled.displayName = 'OnesyIconMaterialCalendarViewMonthW100Filled';

export default IconMaterialCalendarViewMonthW100Filled;
