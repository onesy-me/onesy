import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpW100'

      short_name='Mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-376h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialMpW100.displayName = 'OnesyIconMaterialMpW100';

export default IconMaterialMpW100;
