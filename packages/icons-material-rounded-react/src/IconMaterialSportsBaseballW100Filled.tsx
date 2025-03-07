import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsBaseballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBaseballW100Filled'

      short_name='SportsBaseball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-247q-43-48-65.5-108.24Q132-415.49 132-480t22.5-124.76Q177-665 220-713q56 40 85.5 101.95 29.5 61.96 29.5 131Q335-411 305.5-349 276-287 220-247Zm260.03 115Q413-132 352-156.5T243-227q57-47 88.5-112.5T363-480q0-75-31.5-140.5T243-733q48-46 108.97-70.5 60.98-24.5 128-24.5Q547-828 608-803.5T717-733q-57 47-88.5 112.5T597-480q0 75 31.5 140.5T717-227q-48 46-108.97 70.5-60.98 24.5-128 24.5ZM740-247q-56-40-85.5-101.95-29.5-61.96-29.5-131Q625-549 654.5-611 684-673 740-713q43 48 65.5 108.24Q828-544.51 828-480t-22.5 124.76Q783-295 740-247Z"/>
    </Icon>
  );
});

IconMaterialSportsBaseballW100Filled.displayName = 'OnesyIconMaterialSportsBaseballW100Filled';

export default IconMaterialSportsBaseballW100Filled;
