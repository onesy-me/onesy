import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookOnlineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookOnlineW100'

      short_name='BookOnline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-352v-96q13.6 0 22.8-9.2 9.2-9.2 9.2-22.8 0-13.6-9.2-22.8-9.2-9.2-22.8-9.2v-96h256v96q-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8 0 13.6 9.2 22.8 9.2 9.2 22.8 9.2v96H352Zm128-48q7 0 11.5-4.5T496-416q0-7-4.5-11.5T480-432q-7 0-11.5 4.5T464-416q0 7 4.5 11.5T480-400Zm0-64q7 0 11.5-4.5T496-480q0-7-4.5-11.5T480-496q-7 0-11.5 4.5T464-480q0 7 4.5 11.5T480-464Zm0-64q7 0 11.5-4.5T496-544q0-7-4.5-11.5T480-560q-7 0-11.5 4.5T464-544q0 7 4.5 11.5T480-528ZM252-92v-776h456v776H252Zm28-94v66h400v-66H280Zm0-28h400v-532H280v532Zm0-560h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialBookOnlineW100.displayName = 'OnesyIconMaterialBookOnlineW100';

export default IconMaterialBookOnlineW100;
