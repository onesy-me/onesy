import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUniversalLocalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalLocalW100'

      short_name='UniversalLocal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240h640v-480H160v480Zm-28 28v-536h696v536H132Zm28-28v-480 480Zm319.82-240q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5Zm.18 150q60-51 90-95.5t30-81.5q0-57-36-90t-84-33q-48 0-84 33t-36 90q0 37 30 81.5t90 95.5Z"/>
    </Icon>
  );
});

IconMaterialUniversalLocalW100.displayName = 'OnesyIconMaterialUniversalLocalW100';

export default IconMaterialUniversalLocalW100;
