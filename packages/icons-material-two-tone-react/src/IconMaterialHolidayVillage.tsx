import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHolidayVillage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillage'

      short_name='HolidayVillage'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M8,6.83l-4,4V18h3v-3h2v3h3v-7.17L8,6.83z M9,13H7v-2h2V13z" opacity=".3"/><path d="M8,4l-6,6v10h12V10L8,4z M12,18H9v-3H7v3H4v-7.17l4-4l4,4V18z M9,13H7v-2h2V13z M18,20V8.35L13.65,4h-2.83L16,9.18V20H18z M22,20V6.69L19.31,4h-2.83L20,7.52V20H22z"/>
    </Icon>
  );
});

IconMaterialHolidayVillage.displayName = 'OnesyIconMaterialHolidayVillage';

export default IconMaterialHolidayVillage;
