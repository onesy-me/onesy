import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriority = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Priority'

      short_name='Priority'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70H360Zm80-312-60-60q-11-11-28-11t-28 11q-11 11-11 28t11 28l88 88q12 12 28 12t28-12l184-184q11-11 11-28t-11-28q-11-11-28-11t-28 11L440-432Zm-80 232h240q66 0 113-47t47-113v-240q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v240q0 66 47 113t113 47Zm120-280Z"/>
    </Icon>
  );
});

IconMaterialPriority.displayName = 'OnesyIconMaterialPriority';

export default IconMaterialPriority;
