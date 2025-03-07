import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpW100Filled'

      short_name='VolumeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M744-481q0-82-44.5-149.5T580-731q-6-3-9-8t0-10q3-6 10-7t14 2q80 38 128.5 111T772-481q0 89-48.5 162T595-208q-7 3-14 2t-10-7q-3-5 0-10t9-8q75-33 119.5-100.5T744-481Zm-426 69H218q-13 0-21.5-8.5T188-442v-76q0-13 8.5-21.5T218-548h100l100-100q7-7 16.5-3.5T444-638v316q0 10-9.5 13.5T418-312L318-412Zm306-68q0 30-10 57t-29 48q-6 5-13.5 2t-7.5-11v-194q0-8 7.5-11t13.5 2q19 21 29 49t10 58Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpW100Filled.displayName = 'OnesyIconMaterialVolumeUpW100Filled';

export default IconMaterialVolumeUpW100Filled;
