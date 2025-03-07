import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreW100'

      short_name='More'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M333-252 172-480l163-228h453v456H333Zm16-28h411v-400H349L206-480l143 200Zm411 0v-400 400ZM374-452q11 0 19.5-8.5T402-480q0-11-8.5-19.5T374-508q-11 0-19.5 8.5T346-480q0 11 8.5 19.5T374-452Zm140 0q11 0 19.5-8.5T542-480q0-11-8.5-19.5T514-508q-11 0-19.5 8.5T486-480q0 11 8.5 19.5T514-452Zm140 0q11 0 19.5-8.5T682-480q0-11-8.5-19.5T654-508q-11 0-19.5 8.5T626-480q0 11 8.5 19.5T654-452Z"/>
    </Icon>
  );
});

IconMaterialMoreW100.displayName = 'OnesyIconMaterialMoreW100';

export default IconMaterialMoreW100;
