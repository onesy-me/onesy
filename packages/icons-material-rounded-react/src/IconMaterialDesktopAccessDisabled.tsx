import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopAccessDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabled'

      short_name='DesktopAccessDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m127-833 73 73h-40v440h368L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L608-240h-48v80h40q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H360q-17 0-28.5-11.5T320-120q0-17 11.5-28.5T360-160h40v-80H160q-33 0-56.5-23.5T80-320v-440q0-37 23.5-55l23.5-18Zm753 73v420q0 20-12.5 30T840-300q-15 0-27.5-10.5T800-341v-419H360q-20 0-30-12.5T320-800q0-15 10-27.5t30-12.5h440q33 0 56.5 23.5T880-760ZM557-517Zm-213 13Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabled.displayName = 'OnesyIconMaterialDesktopAccessDisabled';

export default IconMaterialDesktopAccessDisabled;
