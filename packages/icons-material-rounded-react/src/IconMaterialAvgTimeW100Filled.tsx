import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvgTimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeW100Filled'

      short_name='AvgTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-866q-6 0-10-4t-4-10q0-6 4-10t10-4h172q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm6 554-68-134q-2-4-5-6t-7-2H172q5-124 94-209t214-85q57 0 110.5 21t97.5 59l30-30q5-5 10-5t10 5q5 4 5 9.5t-5 10.5l-30 30q35 41 56.5 90.5T788-454H649l-76-152q-4-8-12.5-8t-12.5 8L400-312Zm80 180q-125 0-214-85.5T172-426h139l76 152q4 8 12.5 8.5T412-273l148-295 68 134q2 4 5 6t7 2h148q-5 123-94 208.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeW100Filled.displayName = 'OnesyIconMaterialAvgTimeW100Filled';

export default IconMaterialAvgTimeW100Filled;
