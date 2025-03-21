import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotTubW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotTubW100Filled'

      short_name='HotTub'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M278-620q-21 0-35.5-15T228-671q0-21 14.5-36t35.5-15q22 0 37 15t15 36q0 21-15 36t-37 15ZM132-132v-316h110v-74q0-20 13.5-33t33.5-13q12 0 23 4.5t19 13.5l52 58q11 14 24.5 24.5T436-448h392v316H132Zm616-416 2-22q2-25-9-47.5T712-658q-22-23-36-50t-11-58l2-22h28l-2 24q-2 24 8.5 46t28.5 38q23 23 37 50.5t11 59.5l-2 22h-28Zm-161 0 2-22q2-26-9.5-48.5T550-658q-21-23-35-50t-11-58l2-22h28l-2 24q-2 24 8.5 45.5T568-680q23 22 37 50t12 60l-2 22h-28Zm60 388h125v-260H647v260Zm-153 0h125v-260H494v260Zm-153 0h125v-260H341v260Zm-153 0h125v-260H188v260Z"/>
    </Icon>
  );
});

IconMaterialHotTubW100Filled.displayName = 'OnesyIconMaterialHotTubW100Filled';

export default IconMaterialHotTubW100Filled;
