import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterMediumW100'

      short_name='WaterMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m247-417 26 229q2 12 10.5 20t21.5 8h351q13 0 21.5-8t10.5-20l26-238h-12q-36 0-67-5.5T551-452q-26-8-53.5-11t-55.5-3q-52 0-101 12t-94 37Zm-4-29q47-24 97-36t103-12q29 0 58 3.5t57 11.5q54 15 82 20t61 5h16l39-346H203l40 354Zm63 314q-23 0-41-15t-20-38l-69-610q-2-14 7-23.5t23-9.5h548q14 0 23 9.5t7 23.5l-68 610q-2 23-20.5 38T654-132H306Zm-33-28h415-415Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumW100.displayName = 'OnesyIconMaterialWaterMediumW100';

export default IconMaterialWaterMediumW100;
