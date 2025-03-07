import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllW100'

      short_name='BorderAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232q-24.75 0-42.37-17.63Q172-207.25 172-232Zm322-234v266h266v-266H494Zm0-28h266v-266H494v266Zm-28 0v-266H200v266h266Zm0 28H200v266h266v-266Z"/>
    </Icon>
  );
});

IconMaterialBorderAllW100.displayName = 'OnesyIconMaterialBorderAllW100';

export default IconMaterialBorderAllW100;
