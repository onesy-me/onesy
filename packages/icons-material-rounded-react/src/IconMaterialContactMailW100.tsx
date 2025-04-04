import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactMailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailW100'

      short_name='ContactMail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-510h200q13 0 21.5-8.5T830-540v-120q0-13-8.5-21.5T800-690H600q-13 0-21.5 8.5T570-660v120q0 13 8.5 21.5T600-510Zm100-78 76-53q7-5 14.5-.5T798-629q0 3-6 11l-75 52q-8 5-17 5t-17-5l-75-52q-2-2-6-11 0-8 7.5-12.5t14.5.5l76 53ZM112-192q-26 0-43-17t-17-43v-456q0-26 17-43t43-17h736q26 0 43 17t17 43v456q0 26-17 43t-43 17H112Zm466-28h270q12 0 22-10t10-22v-456q0-12-10-22t-22-10H112q-12 0-22 10t-10 22v456q0 12 10 22t22 10h30q42-48 98-78t120-30q64 0 120 30t98 78ZM360-388q39 0 66.5-27.5T454-482q0-39-27.5-66.5T360-576q-39 0-66.5 27.5T266-482q0 39 27.5 66.5T360-388ZM182-220h356q-35-38-81-59t-97-21q-51 0-97 21t-81 59Zm178-196q-27 0-46.5-19.5T294-482q0-27 19.5-46.5T360-548q27 0 46.5 19.5T426-482q0 27-19.5 46.5T360-416Zm120-64Z"/>
    </Icon>
  );
});

IconMaterialContactMailW100.displayName = 'OnesyIconMaterialContactMailW100';

export default IconMaterialContactMailW100;
