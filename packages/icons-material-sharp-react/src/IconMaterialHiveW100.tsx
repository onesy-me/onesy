import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveW100'

      short_name='Hive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m405-106-68-120H205l-75-134 68-120-68-120 75-134h132l68-120h150l68 120h132l75 134-68 120 68 120-75 134H623l-68 120H405Zm218-388h116l59-106-59-106H623l-60 106 60 106ZM423-374h114l60-106-60-106H423l-60 106 60 106Zm0-240h114l61-107-60-105H422l-60 105 61 107ZM222-494h115l60-106-60-106H222l-60 106 60 106Zm0 240h115l60-106-60-106H221l-59 106 60 106Zm200 120h116l60-105-61-107H423l-61 107 60 105Zm201-120h115l60-106-60-106H623l-60 106 60 106Z"/>
    </Icon>
  );
});

IconMaterialHiveW100.displayName = 'OnesyIconMaterialHiveW100';

export default IconMaterialHiveW100;
