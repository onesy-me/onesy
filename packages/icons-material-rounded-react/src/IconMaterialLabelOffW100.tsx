import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffW100'

      short_name='LabelOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M686-337q-4 6-9 6t-10-3q-5-3-6-8.5t3-11.5l77-107q6-8 6-19t-6-19L630-654q-9-14-21-20t-29-6H326q-7 0-10.5-4.5T312-694q0-5 3.5-9.5T326-708h254q21 0 41.5 11.5T654-668l109 153q6 8 8.5 17t2.5 18q0 9-2.5 18t-8.5 17l-77 108Zm-454 85q-26 0-43-17t-17-43v-336q0-5 1-11.5t3-12.5l-70-70q-4-4-4.5-9.5T106-762q5-5 10-5t10 5l616 616q4 4 4.5 9.5T742-126q-5 5-10 5t-10-5L592-256q-3 2-10.5 3t-13.5 1H232Zm152-212Zm101-52Zm83 236L200-648v336q0 12 10 22t22 10h336Z"/>
    </Icon>
  );
});

IconMaterialLabelOffW100.displayName = 'OnesyIconMaterialLabelOffW100';

export default IconMaterialLabelOffW100;
