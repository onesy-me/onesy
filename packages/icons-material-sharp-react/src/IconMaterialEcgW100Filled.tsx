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
      <path d="M132-494v-254h696v283q-5-1-9-1h-9q-23 0-45.5 6T720-443q-16-10-32.5-16t-33.5-8v-27H529l-76-152q-2-3-5.5-4.5T440-652q-4 0-7 1.5t-5 4.5L280-352l-68-134q-2-4-5-6t-7-2h-68Zm0 282v-254h59l76 152q2 4 5.5 6t7.5 2q4 0 7-2t5-5l148-295 68 134q2 4 5 6t7 2h85q-63 10-107 61.5T454-287q0 22 3.5 38.5T471-212H132Zm498-154q16 0 30.5 7t30.5 21l29 26 28-25q17-15 31.5-22t30.5-7q31 0 53.5 23.5T886-287q0 25-23 51.5T758-138l-38 33-38-33q-82-71-105-97.5T554-287q0-32 22.5-55.5T630-366Z"/>
    </Icon>
  );
});

IconMaterialEcgW100Filled.displayName = 'OnesyIconMaterialEcgW100Filled';

export default IconMaterialEcgW100Filled;
