import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterDramaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaW100Filled'

      short_name='FilterDrama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-212q-70 0-119-49T92-380q0-69 49-118.5T260-548q66 0 114 44.5T427-394q1 6 5.5 10t9.5 4q6 0 10-4.5t4-9.5q-5-78-58.5-129T260-576q17-77 79.5-124.5T480-748q95 0 161.5 66.5T708-520v52h32q54 0 91 37t37 91q0 53-37.5 90.5T740-212H260Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaW100Filled.displayName = 'OnesyIconMaterialFilterDramaW100Filled';

export default IconMaterialFilterDramaW100Filled;
