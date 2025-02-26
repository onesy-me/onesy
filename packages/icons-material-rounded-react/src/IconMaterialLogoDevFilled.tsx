import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogoDevFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoDevFilled'

      short_name='LogoDev'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-360q19 0 32.5-13.5T382-406v-148q0-19-13.5-32.5T336-600h-66q-13 0-21.5 8.5T240-570v180q0 13 8.5 21.5T270-360h66Zm-50-46v-148h50v148h-50Zm149 46h76q9 0 15.5-7t6.5-17q0-9-6.5-15.5T511-406h-60v-52h29q10 0 16.5-6.5T503-481q0-10-6.5-16.5T480-504h-29v-50h59q10 0 16.5-6.5T533-577q0-10-6.5-16.5T510-600h-75q-13 0-21.5 8.5T405-570v180q0 13 8.5 21.5T435-360Zm206-1q13 0 22.5-8.5T676-391l48-180q3-11-4-20t-18-9q-8 0-14.5 4.5T679-583l-38 147-39-147q-2-8-8-12.5t-14-4.5q-11 0-18 9t-4 20l48 180q3 13 12.5 21.5T641-361ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialLogoDevFilled.displayName = 'OnesyIconMaterialLogoDevFilled';

export default IconMaterialLogoDevFilled;
