import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAudioDescriptionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioDescriptionW100'

      short_name='AudioDescription'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M104-346v-254l14-14h158l14 14v254h-28v-80H132v80h-28Zm28-108h130v-132H132v132Zm258 108v-268h174l14 14v240l-14 14H390Zm28-28h132v-212H418v212Zm280-33-20-20q11-10.56 16.5-23.99 5.5-13.43 5.5-28.79 0-16.31-5.5-29.27Q689-522 678-533l20-21q14.35 14.3 22.17 33.15Q728-502 728-480t-7.83 40.4Q712.35-421.2 698-407Zm90 92-20-22q27.89-27.76 43.94-64.35Q828-437.94 828-480q0-42-16.06-78.5Q795.89-594.99 768-623l20-22q32.17 32.1 50.09 74.4Q856-528.29 856-480.14q0 48.14-17.91 90.45Q820.17-347.38 788-315Z"/>
    </Icon>
  );
});

IconMaterialAudioDescriptionW100.displayName = 'OnesyIconMaterialAudioDescriptionW100';

export default IconMaterialAudioDescriptionW100;
