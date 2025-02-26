import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSevereColdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdW100'

      short_name='SevereCold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-586q-6 0-10-4t-4-10q0-6 4-10t10-4q6 0 10 4t4 10q0 6-4 10t-10 4ZM426-106v-181L296-157l-19-19 149-149v-101H325L176-277l-19-19 130-130H106v-28h181L157-584l19-19 149 149h101v-101L277-704l19-19 130 130v-181h28v181l130-130 19 19-149 149v101h320v28H593l130 130-19 19-149-149H454v101l149 149-19 19-130-130v181h-28Zm360-588v-160h28v160h-28Z"/>
    </Icon>
  );
});

IconMaterialSevereColdW100.displayName = 'OnesyIconMaterialSevereColdW100';

export default IconMaterialSevereColdW100;
