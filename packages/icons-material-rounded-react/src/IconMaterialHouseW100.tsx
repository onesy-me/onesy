import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseW100'

      short_name='House'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-212q-25 0-42.5-17.5T236-272v-301l-116 86q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-253q8-6 17-8.5t19-2.5q10 0 19 2.5t17 8.5l142 105v-60q0-13 9-22t22-9q13 0 22 9t9 22v106l138 102q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5l-116-86v301q0 25-17.5 42.5T665-212h-73q-25 0-42.5-17.5T532-272v-108q0-14-9-23t-23-9h-40q-14 0-23 9t-9 23v108q0 25-17.5 42.5T368-212h-72Zm0-28h72q14 0 23-9t9-23v-108q0-25 17.5-42.5T460-440h40q25 0 42.5 17.5T560-380v108q0 14 9 23t23 9h73q14 0 23-9t9-23v-321L499-739q-8-6-19-6t-19 6L264-593v321q0 14 9 23t23 9Zm114-320h140q0-27-21-44.5T480-622q-28 0-49 17.5T410-560Zm-42 320q14 0 23-9t9-23v-108q0-25 17.5-42.5T460-440h40q25 0 42.5 17.5T560-380v108q0 14 9 23t23 9q-14 0-23-9t-9-23v-108q0-25-17.5-42.5T500-440h-40q-25 0-42.5 17.5T400-380v108q0 14-9 23t-23 9Z"/>
    </Icon>
  );
});

IconMaterialHouseW100.displayName = 'OnesyIconMaterialHouseW100';

export default IconMaterialHouseW100;
