import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogoDevW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoDevW100'

      short_name='LogoDev'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-376h101l22-23v-163l-22-22H250v208Zm28-28v-152h67v152h-67Zm165 0v-62h57v-28h-57v-62h80v-28H415v208h108v-28h-80Zm193-1-52-179h-30l58 208h47l57-208h-30l-50 179ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialLogoDevW100.displayName = 'OnesyIconMaterialLogoDevW100';

export default IconMaterialLogoDevW100;
