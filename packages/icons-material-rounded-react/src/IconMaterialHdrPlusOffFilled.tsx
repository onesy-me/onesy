import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrPlusOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusOffFilled'

      short_name='HdrPlusOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-540h60v-120h-60v120ZM340-340h80v-40h-80v40Zm0 60h44l27 63q3 8 10.5 12.5T437-200q15 0 23.5-13t2.5-27l-19-44q15-9 25.5-23.5T480-340v-40q0-25-17.5-42.5T420-440H310q-13 0-21.5 8.5T280-410v180q0 13 8.5 21.5T310-200q13 0 21.5-8.5T340-230v-50Zm-30-200q13 0 21.5-8.5T340-510v-54l-60-60v114q0 13 8.5 21.5T310-480ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-84 31-156.5T199-761l562 562q-51 57-123.5 88T480-80Zm312 24L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm88-424q0 44-8 84t-25 77q-5 11-15 18t-21 9q-11 2-23-2t-21-13L594-480h46q24 0 42-18t18-42v-120q0-24-18-42t-42-18H520v166l-40-40v-96q0-13-8.5-21.5T450-720q-13 0-21.5 8.5T420-690v36L307-767q-9-9-13-21t-2-23q2-11 8.5-21t17.5-15q37-17 78-25t84-8q83 0 156 31.5T763-763q54 54 85.5 127T880-480Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusOffFilled.displayName = 'OnesyIconMaterialHdrPlusOffFilled';

export default IconMaterialHdrPlusOffFilled;
