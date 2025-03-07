import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReminderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReminderW100Filled'

      short_name='Reminder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-588h66v-66q0-27-19.5-46.5T270-720q-27 0-46.5 19.5T204-654q0 27 19.5 46.5T270-588Zm160 0q27 0 46.5-19.5T496-654q0-27-19.5-46.5T430-720q-27 0-46.5 19.5T364-654v66h66Zm-66 96h294q37.5 0 63.75 26.25T748-402v135.93Q748-210 708.34-171q-39.65 39-95.34 39H455q-34 0-65-14t-51-41L165-420q-3-5-3-10t4-9q7-8 16.5-10t18.5 3l135 64v-178h-66q-39.17 0-66.58-27.38Q176-614.76 176-653.88q0-39.12 27.42-66.62Q230.83-748 270-748q19.43 0 36.22 7Q323-734 336-721v-93q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v93q13-13 30.08-20t35.92-7q39.17 0 66.58 27.38Q524-693.24 524-654.12q0 39.12-27.42 66.62Q469.17-560 430-560h-66v68Z"/>
    </Icon>
  );
});

IconMaterialReminderW100Filled.displayName = 'OnesyIconMaterialReminderW100Filled';

export default IconMaterialReminderW100Filled;
