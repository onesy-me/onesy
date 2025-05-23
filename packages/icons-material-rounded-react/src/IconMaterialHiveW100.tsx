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
      <path d="M337-226h-97q-17 0-30.5-8.5T188-257l-41-74q-8-14-8-29t8-29l51-91-51-91q-8-14-8-29t8-29l41-74q8-14 21.5-22.5T240-734h97l51-90q8-14 21.5-22t30.5-8h80q17 0 30.5 8t21.5 22l51 90h97q17 0 30.5 8.5T772-703l41 74q8 14 8 29t-8 29l-51 91 51 91q8 14 8 29t-8 29l-41 74q-8 14-21.5 22.5T720-226h-97l-51 90q-8 14-21.5 22t-30.5 8h-80q-17 0-30.5-8T388-136l-51-90Zm286-268h116l50-90q4-8 4-16t-4-16l-41-74q-5-8-12-12t-16-4h-97l-60 106 60 106ZM423-374h114l60-106-60-106H423l-60 106 60 106Zm0-240h114l61-107-51-89q-5-8-12.5-12t-15.5-4h-78q-8 0-15.5 4T413-810l-51 89 61 107Zm-26 14-60-106h-96q-9 0-16 4t-12 12l-42 74q-5 8-5 16t5 16l51 90h115l60-106Zm0 240-60-106H221l-50 90q-4 8-4 16t4 16l42 74q5 8 12 12t16 4h96l60-106Zm26 14-61 107 51 89q5 8 12.5 12t15.5 4h78q8 0 15.5-4t12.5-12l51-89-61-107H423Zm200 92h96q9 0 16-4t12-12l42-74q5-8 5-16t-5-16l-51-90H623l-60 106 60 106Z"/>
    </Icon>
  );
});

IconMaterialHiveW100.displayName = 'OnesyIconMaterialHiveW100';

export default IconMaterialHiveW100;
