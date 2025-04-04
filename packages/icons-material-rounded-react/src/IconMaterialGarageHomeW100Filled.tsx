import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeW100Filled'

      short_name='GarageHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-172q-12.75 0-21.37-8.63Q212-189.25 212-202v-342q0-14.25 6.38-27 6.37-12.75 17.62-21l208-158q8.3-6 17.34-9 9.05-3 18.86-3 9.8 0 18.71 3 8.92 3 17.09 9l208 158q11.25 8.25 17.63 21 6.37 12.75 6.37 27v342q0 12.75-8.62 21.37Q730.75-172 718-172h-34q-12.75 0-21.37-8.63Q654-189.25 654-202v-289q0-12.75-8.62-21.38Q636.75-521 624-521H336q-12.75 0-21.37 8.62Q306-503.75 306-491v289q0 12.75-8.62 21.37Q288.75-172 276-172h-34Zm122-29q-12.75 0-21.37-8.63Q334-218.25 334-231v-72q0-12.75 8.63-21.38Q351.25-333 364-333h232q12.75 0 21.38 8.62Q626-315.75 626-303v72q0 12.75-8.62 21.37Q608.75-201 596-201H364Zm0-160q-12.75 0-21.37-8.63Q334-378.25 334-391v-72q0-12.75 8.63-21.38Q351.25-493 364-493h232q12.75 0 21.38 8.62Q626-475.75 626-463v72q0 12.75-8.62 21.37Q608.75-361 596-361H364Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeW100Filled.displayName = 'OnesyIconMaterialGarageHomeW100Filled';

export default IconMaterialGarageHomeW100Filled;
