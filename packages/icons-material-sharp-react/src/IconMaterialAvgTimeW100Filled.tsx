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
      <path d="M380-866v-28h200v28H380Zm20 555-71-143H172q5-124 94-209t214-85q57 0 110.5 21t97.5 59l40-40 20 20-40 40q35 41 56.5 90.5T788-454H649l-89-178-160 321Zm80 179q-125 0-214-85.5T172-426h139l89 177 160-320 72 143h156q-5 123-94 208.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeW100Filled.displayName = 'OnesyIconMaterialAvgTimeW100Filled';

export default IconMaterialAvgTimeW100Filled;
