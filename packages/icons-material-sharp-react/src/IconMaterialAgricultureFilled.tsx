import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAgricultureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgricultureFilled'

      short_name='Agriculture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-83 0-141.5-58.5T40-360q0-83 58.5-141.5T240-560q83 0 141.5 58.5T440-360q0 83-58.5 141.5T240-160Zm0-140q-25 0-42.5-17.5T180-360q0-25 17.5-42.5T240-420q25 0 42.5 17.5T300-360q0 25-17.5 42.5T240-300Zm540 140q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41ZM280-680q33 0 56.5 23.5T360-600H120v-80h160Zm-40 440q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm540 0q25 0 42.5-17.5T840-300q0-25-17.5-42.5T780-360q-25 0-42.5 17.5T720-300q0 25 17.5 42.5T780-240Zm-304-80h126q10-72 62.5-115T783-478q25 0 49.5 7t47.5 21v-270H548l-42-44 56-56-28-28-142 142 30 28 56-56 42 42v92q0 33-23.5 56.5T440-520h-22q30 33 45.5 74t15.5 86q0 10-.5 20t-2.5 20Z"/>
    </Icon>
  );
});

IconMaterialAgricultureFilled.displayName = 'OnesyIconMaterialAgricultureFilled';

export default IconMaterialAgricultureFilled;
