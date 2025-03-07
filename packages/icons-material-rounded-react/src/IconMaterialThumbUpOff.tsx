import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbUpOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOff'

      short_name='ThumbUpOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21V8l6-5.95q.375-.375.887-.438.513-.062.988.188t.7.7q.225.45.1.925L14.55 8H21q.8 0 1.4.6.6.6.6 1.4v2q0 .175-.05.375t-.1.375l-3 7.05q-.225.5-.75.85T18 21ZM9 8.85V19h9l3-7v-2h-9l1.35-5.5ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19v-9q0-.825.588-1.413Q3.175 8 4 8h3v2H4v9h3v2Zm5-2V8.85 19Z"/>
    </Icon>
  );
});

IconMaterialThumbUpOff.displayName = 'OnesyIconMaterialThumbUpOff';

export default IconMaterialThumbUpOff;
