import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterVintageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterVintageFilled'

      short_name='FilterVintage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-80q-57 0-101-36t-55-92q-53 17-107-2t-83-66q-30-48-22-106.5t52-97.5q-42-38-50.5-94T134-678q27-48 81.5-69.5T324-752q11-56 55-92t101-36q57 0 101 36t55 92q56-17 108.5 3t81.5 71q27 50 19.5 104.5T794-480q44 39 52.5 96.5T828-276q-29 51-81.5 68T638-208q-11 56-55 92T482-80Zm-2-240q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
    </Icon>
  );
});

IconMaterialFilterVintageFilled.displayName = 'OnesyIconMaterialFilterVintageFilled';

export default IconMaterialFilterVintageFilled;
