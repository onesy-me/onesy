import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeepOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepOffFilled'

      short_name='KeepOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-501 290-783q-5-5-7.5-11t-2.5-12q0-13 9-23.5t24-10.5h327q17 0 28.5 11.5T680-800q0 16-14.5 22.5T640-760v230q0 27-24.5 37.5T572-501ZM440-80v-240H296q-25 0-40-17.5T241-377q0-11 4.5-22t14.5-21l60-60v-46L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l679 679q12 12 11.5 28.5T818-84q-12 11-28 11.5T762-84L526-320h-6v240q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80Z"/>
    </Icon>
  );
});

IconMaterialKeepOffFilled.displayName = 'OnesyIconMaterialKeepOffFilled';

export default IconMaterialKeepOffFilled;
