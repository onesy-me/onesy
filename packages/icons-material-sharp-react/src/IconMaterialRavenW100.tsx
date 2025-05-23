import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRavenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RavenW100'

      short_name='Raven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m328-132-26-11 59-141q-100-16-164.5-92.5T132-554.3V-703q0-51.56 36.72-88.28T257-828q13.48 0 25.74 2.5Q295-823 307-818l183 77-108 42v83l429 293 18 111h-41l-27-68H529v148h-28v-148H390l-62 148Zm77-176h379l-124-84H395q-58.58 0-100.29-41.71Q253-475.42 253-534h28q0 48 33 81t81 33h224L354-600v-103q0-41-28-69t-69-28q-41 0-69 28t-28 69v149q0 102.5 71.46 174.25T405-308ZM257.04-677q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5ZM395-392Z"/>
    </Icon>
  );
});

IconMaterialRavenW100.displayName = 'OnesyIconMaterialRavenW100';

export default IconMaterialRavenW100;
