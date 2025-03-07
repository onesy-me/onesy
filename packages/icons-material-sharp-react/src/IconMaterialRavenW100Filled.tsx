import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRavenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RavenW100Filled'

      short_name='Raven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m390-280-62 148-26-11 59-141q-100-16-164.5-92.5T132-554.3V-703q0-51.56 36.72-88.28T257-828q13.48 0 25.74 2.5Q295-823 307-818l183 77-108 42v83l287 196H395q-48 0-81-33t-33-81h-28q0 58.58 41.71 100.29Q336.42-392 395-392h315l101 69 18 111h-41l-27-68H529v148h-28v-148H390ZM257.04-729q-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5 11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5Z"/>
    </Icon>
  );
});

IconMaterialRavenW100Filled.displayName = 'OnesyIconMaterialRavenW100Filled';

export default IconMaterialRavenW100Filled;
