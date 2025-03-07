import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsRugbyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsRugbyW100'

      short_name='SportsRugby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-152q-48 0-84.5-6.5T174-176q-11-11-16.5-47t-5.5-83q0-107 36.5-205T288-672q63-63 161-99.5T654-808q48 0 84.5 6.5T786-784q11 11 16.5 47t5.5 83q0 107-36.5 205T672-288q-63 63-161 99.5T306-152Zm-124-90q32-103 82-187.5T380-580q65-65 150-115t188-83q-118-11-231 24.5T308-652q-65 65-101 179.5T182-242Zm62 60q115 11 228.5-24.5T652-308q65-65 101-180.5T778-720q-33 104-82.5 189T580-380q-66 66-150.5 116T244-182Zm-46-14q101-27 196-80t166-124q69-69 122-164.5T762-764q-101 27-196 80T400-560q-69 69-122 164.5T198-196Zm282-284Z"/>
    </Icon>
  );
});

IconMaterialSportsRugbyW100.displayName = 'OnesyIconMaterialSportsRugbyW100';

export default IconMaterialSportsRugbyW100;
