import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledFilled'

      short_name='HourglassDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-57-24-23H200q-17 0-28.5-11.5T160-120q0-17 11.5-28.5T200-160h40v-120q0-61 28.5-114.5T348-480q-32-20-54.5-48T257-590L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM640-800H292q-20 0-30-12.5T252-840q0-15 10-27.5t30-12.5h468q17 0 28.5 11.5T800-840q0 17-11.5 28.5T760-800h-40v120q0 55-23 104.5T631-493q-11 9-26 3.5T582-509q-8-14-5.5-29t13.5-26q23-23 36.5-53t13.5-63v-120ZM320-160h320v-47L419-428q-45 19-72 59t-27 89v120Zm400 0Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledFilled.displayName = 'OnesyIconMaterialHourglassDisabledFilled';

export default IconMaterialHourglassDisabledFilled;
