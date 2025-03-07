import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEcgW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgW100Filled'

      short_name='Ecg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-494v-194q0-26 17-43t43-17h576q26 0 43 17t17 43v205q0 8-5 12.5t-13 4.5q-23 0-45.5 6T720-443q-16-10-32.5-16t-33.5-8q0-11-9-19t-21-8h-95l-76-152q-2-3-5.5-4.5T440-652q-4 0-7 1.5t-5 4.5L280-352l-68-134q-2-4-5-6t-7-2h-68Zm60 282q-26 0-43-17t-17-43v-194h59l76 152q2 4 5.5 6t7.5 2q4 0 7-2t5-5l148-295 68 134q2 4 5 6t7 2h85q-63 10-107 61.5T454-287q0 11 1 21t3 19q3 14-4.5 24.5T433-212H192Zm438-154q16 0 30.5 7t30.5 21l29 26 28-25q17-15 31.5-22t30.5-7q31 0 53.5 23.5T886-287q0 25-23 51.5T758-138l-18 16q-8 8-20 8t-20-8l-18-16q-82-71-105-97.5T554-287q0-32 22.5-55.5T630-366Z"/>
    </Icon>
  );
});

IconMaterialEcgW100Filled.displayName = 'OnesyIconMaterialEcgW100Filled';

export default IconMaterialEcgW100Filled;
