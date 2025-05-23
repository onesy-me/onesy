import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRheumatologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RheumatologyFilled'

      short_name='Rheumatology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-254-83-84q-16-17-25-37.5T161-417q23 27 55.5 42t68.5 15q31 0 58.5-11t56.5-35q2-2 5-4t5-3q2 1 5.5 3t5.5 4q29 24 56.5 35t57.5 11q37 0 69.5-15t55.5-42q-2 22-11 42.5T624-338l-84 84v134q0 17-11.5 28.5T500-80H320q-17 0-28.5-11.5T280-120v-134Zm468-68q-15-5-23-20t-3-30q6-17 20.5-24.5T773-398l120 40q16 5 23.5 19.5T918-307q-5 15-19.5 22.5T868-282l-120-40Zm12-118q-17 0-28.5-11.5T720-480q0-17 11.5-28.5T760-520h120q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440H760Zm13-122q-16 5-31-2t-20-23q-5-17 2.5-31.5T748-638l120-40q16-5 30.5 2.5T918-652q5 15-2 30t-23 20l-120 40ZM285-400q-52 0-88.5-36.5T160-525q0-26 10-48.5t27-39.5l83-84v-143q0-17 11.5-28.5T320-880h180q17 0 28.5 11.5T540-840v142l84 84q17 17 26.5 40t9.5 49q0 52-36 88.5T535-400q-33 0-53.5-12.5T447-437q-15-12-23.5-14.5T410-454q-9 0-18.5 6T374-437q-14 12-34.5 24.5T285-400Z"/>
    </Icon>
  );
});

IconMaterialRheumatologyFilled.displayName = 'OnesyIconMaterialRheumatologyFilled';

export default IconMaterialRheumatologyFilled;
