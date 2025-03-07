import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMuseumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumW100'

      short_name='Museum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-28h80v-412h-23q-7.24 0-12.12-4.95Q172-581.89 172-589q0-5.23 2.36-9.59 2.35-4.36 6.64-7.41l265-186q8-5 16.56-8 8.57-3 17.5-3 8.94 0 17.44 3 8.5 3 16.5 8l265 186q4.29 2.97 6.64 7.44Q788-594.1 788-589q0 7.24-4.88 12.12Q778.24-572 771-572h-23v412h80v28H132Zm588-28v-454L498-769q-8-6-18-6t-18 6L240-614v454h480ZM480-328q7.41 0 13.7-3 6.3-3 11.3-10l75-111v172q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-200q0-5.94-4.03-9.97T594-494h-12.21q-3.37 0-6.53 1.6-3.15 1.6-5.26 4.4l-90 134-89-133q-2-4-5.5-5.5T377-494h-8.05q-7.2 0-12.08 4.89Q352-484.23 352-477v197q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-172l75 111q5 7 11.3 10 6.29 3 13.7 3Zm240 168H240h480Z"/>
    </Icon>
  );
});

IconMaterialMuseumW100.displayName = 'OnesyIconMaterialMuseumW100';

export default IconMaterialMuseumW100;
