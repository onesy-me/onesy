import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReminderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReminderW100'

      short_name='Reminder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-588h66v-66q0-27-19.5-46.5T270-720q-27 0-46.5 19.5T204-654q0 27 19.5 46.5T270-588Zm160 0q27 0 46.5-19.5T496-654q0-27-19.5-46.5T430-720q-27 0-46.5 19.5T364-654v66h66Zm128 276Zm190 180H380L158-430l23-26 155 74v-178h-66q-39.17 0-66.58-27.38Q176-614.76 176-653.88q0-39.12 27.42-66.62Q230.83-748 270-748q19.43 0 36.22 7Q323-734 336-721v-107h28v107q13-13 30.08-20t35.92-7q39.17 0 66.58 27.38Q524-693.24 524-654.12q0 39.12-27.42 66.62Q469.17-560 430-560h-66v223l-157-74 189 251h324v-304H484v-28h264v360Z"/>
    </Icon>
  );
});

IconMaterialReminderW100.displayName = 'OnesyIconMaterialReminderW100';

export default IconMaterialReminderW100;
