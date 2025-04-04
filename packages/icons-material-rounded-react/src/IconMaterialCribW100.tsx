import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCribW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribW100'

      short_name='Crib'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-65 0-124.5-23T247-220q-5-5-7-11.5t3-11.5q5-5 11-4.5t11 5.5q18 17 38 30t43 23v-155h-74q-26 0-43-18t-17-46v-225q0-48 31.5-81.5T320-748h88q13 0 21.5 8.5T438-718v165h250q26 0 43 18.5t17 45.5v81q0 28-17 46t-43 18h-74v155q23-10 43.5-23.5T696-243q5-4 10.5-4.5T717-243q5 5 4 10.5t-6 10.5q-50 42-109.5 66T480-132Zm0-28q27 0 53.5-5t52.5-13v-166H374v166q26 8 52.5 13t53.5 5ZM272-372h416q14 0 23-9.5t9-26.5v-81q0-16-9-26t-23-10H410v-195h-90q-33 0-56.5 25.5T240-633v225q0 17 9 26.5t23 9.5Zm138-153Z"/>
    </Icon>
  );
});

IconMaterialCribW100.displayName = 'OnesyIconMaterialCribW100';

export default IconMaterialCribW100;
