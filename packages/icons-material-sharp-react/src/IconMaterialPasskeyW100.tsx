import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPasskeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasskeyW100'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-212v-52q0-22 13.5-41.5T222-336q55-26 109.5-39T440-388q22.75 0 45.5 2.5T531-378q2 41 20.5 76.5T601-240v28H172Zm572 88-42.69-42.16v-130.7Q670-306 650.5-332 631-358 631-391q0-41.01 28.99-70.01 28.99-28.99 70-28.99 41.01 0 69.51 29.03 28.5 29.03 28.5 70.11Q828-359 810.5-335T765-300l35 35-42 42.3 42 42.3-56 56.4ZM440-492q-44.55 0-76.27-31.72Q332-555.45 332-600t31.73-76.28Q395.45-708 440-708t76.28 31.72Q548-644.55 548-600t-31.72 76.28Q484.55-492 440-492Zm290 115q11 0 19.5-9t8.5-20q0-11-8.5-19.5T730-434q-11 0-20 8.5t-9 19.5q0 11 9 20t20 9Z"/>
    </Icon>
  );
});

IconMaterialPasskeyW100.displayName = 'OnesyIconMaterialPasskeyW100';

export default IconMaterialPasskeyW100;
