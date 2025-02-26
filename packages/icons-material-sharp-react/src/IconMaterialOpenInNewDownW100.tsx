import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewDownW100'

      short_name='OpenInNewDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v288h-28v-260H200v560h260v28H172Zm388 0v-28h181L373-568l19-19 368 367v-180h28v228H560Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewDownW100.displayName = 'OnesyIconMaterialOpenInNewDownW100';

export default IconMaterialOpenInNewDownW100;
