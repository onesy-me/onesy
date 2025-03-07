import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailW100Filled'

      short_name='ContactMail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M112-192q-26 0-43-17t-17-43v-456q0-26 17-43t43-17h736q26 0 43 17t17 43v456q0 26-17 43t-43 17H112Zm248-196q39 0 66.5-27.5T454-482q0-39-27.5-66.5T360-576q-39 0-66.5 27.5T266-482q0 39 27.5 66.5T360-388ZM142-220h436q-42-48-98-78t-120-30q-64 0-120 30t-98 78Zm458-290h200q13 0 21.5-8.5T830-540v-120q0-13-8.5-21.5T800-690H600q-13 0-21.5 8.5T570-660v120q0 13 8.5 21.5T600-510Zm100-78 76-53q7-5 14.5-.5T798-629q0 3-6 11l-75 52q-8 5-17 5t-17-5l-75-52q-2-2-6-11 0-8 7.5-12.5t14.5.5l76 53Z"/>
    </Icon>
  );
});

IconMaterialContactMailW100Filled.displayName = 'OnesyIconMaterialContactMailW100Filled';

export default IconMaterialContactMailW100Filled;
