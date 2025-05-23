import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTourW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourW100'

      short_name='Tour'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M254-426v306q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-720q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h504q16 0 24.5 13t2.5 28l-53 133 53 133q6 15-2.5 28T758-426H254Zm0-320v292-292Zm246 200q23 0 38.5-15.5T554-600q0-23-15.5-38.5T500-654q-23 0-38.5 15.5T446-600q0 23 15.5 38.5T500-546Zm-246 92h506l-58-146 58-146H254v292Z"/>
    </Icon>
  );
});

IconMaterialTourW100.displayName = 'OnesyIconMaterialTourW100';

export default IconMaterialTourW100;
