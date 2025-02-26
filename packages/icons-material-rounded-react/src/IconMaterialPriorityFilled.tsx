import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriorityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityFilled'

      short_name='Priority'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70H360Zm80-312-60-60q-11-11-28-11t-28 11q-11 11-11 28t11 28l88 88q12 12 28 12t28-12l184-184q11-11 11-28t-11-28q-11-11-28-11t-28 11L440-432Z"/>
    </Icon>
  );
});

IconMaterialPriorityFilled.displayName = 'OnesyIconMaterialPriorityFilled';

export default IconMaterialPriorityFilled;
