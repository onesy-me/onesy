import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPoolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PoolW100Filled'

      short_name='Pool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-186q-38 0-61 20t-71 20q-48 0-71-20t-61-20q-32 0-52 12.5T121-153q-5 2-10-1t-5-9q0-7 4.5-12t11.5-7q20-8 38.5-20t55.5-12q44 0 67 20t65 20q42 0 65-20t67-20q44 0 68 20t66 20q42 0 64-20t66-20q37 0 55.5 12t38.5 20q7 2 11.5 7t4.5 12q0 6-5 9t-10 1q-23-8-43-20.5T744-186q-38 0-60 20t-70 20q-48 0-72-20t-62-20Zm0-180q-38 0-61 20t-71 20q-48 0-71-20t-61-20q-32 0-52 12.5T121-333q-5 2-10-1t-5-9q0-7 4.5-12t11.5-7q20-8 38.5-20t55.5-12q44 0 67 20t65 20q42 0 65-20t67-20q44 0 67 20t65 20q42 0 65-20t67-20q37 0 55.5 12t38.5 20q7 2 11.5 7t4.5 12q0 6-5 9t-10 1q-23-8-43-20.5T744-366q-38 0-60 20t-70 20q-48 0-72-20t-62-20ZM322-516l128-128-68-68q-28-28-55.5-40.5T259-770q-9-1-16-7.5t-7-15.5q0-9 6.5-14.5T258-812q49 5 84 20t70 50l226 226q-5 5-11 7.5t-14 2.5q-24 0-51.5-20T480-546q-54 0-81.5 20T347-506q-8 0-14-2.5t-11-7.5Zm332-288q33 0 56.5 23.5T734-724q0 33-23.5 56.5T654-644q-33 0-56.5-23.5T574-724q0-33 23.5-56.5T654-804Z"/>
    </Icon>
  );
});

IconMaterialPoolW100Filled.displayName = 'OnesyIconMaterialPoolW100Filled';

export default IconMaterialPoolW100Filled;
