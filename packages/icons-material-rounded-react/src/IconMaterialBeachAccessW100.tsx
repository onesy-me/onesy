import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBeachAccessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessW100'

      short_name='BeachAccess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M762-177 543-394q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l218 218q4 4 4 10t-5 10q-4 4-9 3.5t-9-4.5Zm-545-80q-23-42-35-87t-12-91q0-69 25.5-133.5T273-684q52-52 116.5-77.5T521-787q47 0 91.5 12t86.5 35q14 8 16 23t-10 27L267-252q-12 12-27 10.5T217-257Zm26-11 78-78q-16-23-32-49t-28-56q-12-30-18.5-64.5T237-588q-44 77-39.5 161.5T243-268Zm100-98 248-250q-43-33-88-51.5T417.5-692q-40.5-6-73.5 1t-51 25q-18 18-25 51t-1.5 73.5q5.5 40.5 24 86T343-366Zm348-348q-75-44-160-47t-162 39q39-2 73.5 5.5T507-697q30 12 56.5 28t49.5 33l78-78Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessW100.displayName = 'OnesyIconMaterialBeachAccessW100';

export default IconMaterialBeachAccessW100;
