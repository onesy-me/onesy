import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsFilled'

      short_name='Contacts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm70-80h500q-45-56-109-88t-141-32q-77 0-141 32t-109 88ZM200-40q-17 0-28.5-11.5T160-80q0-17 11.5-28.5T200-120h560q17 0 28.5 11.5T800-80q0 17-11.5 28.5T760-40H200Zm0-800q-17 0-28.5-11.5T160-880q0-17 11.5-28.5T200-920h560q17 0 28.5 11.5T800-880q0 17-11.5 28.5T760-840H200Z"/>
    </Icon>
  );
});

IconMaterialContactsFilled.displayName = 'OnesyIconMaterialContactsFilled';

export default IconMaterialContactsFilled;
