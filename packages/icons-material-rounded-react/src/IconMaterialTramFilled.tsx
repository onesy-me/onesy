import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTramFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramFilled'

      short_name='Tram'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-260v-380q0-97 85-127t195-33l30-60H310q-13 0-21.5-8.5T280-890q0-13 8.5-21.5T310-920h340q13 0 21.5 8.5T680-890q0 13-8.5 21.5T650-860H550l-30 60q119 3 199.5 32.5T800-640v380q0 59-40.5 99.5T660-120l20 20q17 17 8 38.5T655-40q-7 0-13.5-2.5T630-50l-70-70H400l-70 70q-5 5-11.5 7.5T305-40q-23 0-32.5-21.5T280-100l20-20q-59 0-99.5-40.5T160-260Zm320 20q25 0 42.5-17.5T540-300q0-25-17.5-42.5T480-360q-25 0-42.5 17.5T420-300q0 25 17.5 42.5T480-240ZM240-480h480v-120H240v120Z"/>
    </Icon>
  );
});

IconMaterialTramFilled.displayName = 'OnesyIconMaterialTramFilled';

export default IconMaterialTramFilled;
