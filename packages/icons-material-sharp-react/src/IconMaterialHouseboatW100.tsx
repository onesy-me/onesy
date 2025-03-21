import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseboatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseboatW100'

      short_name='Houseboat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-252v-29q31-8 49.5-23.5T213-320q48 0 71.5 20t61.5 20q41 0 64.5-20t69.5-20q46 0 69.5 20t64.5 20q38 0 61.5-20t71.5-20q42 0 57.5 14.5T854-281v29q-31 0-52.5-20T746-292q-40 0-63 20t-70 20q-48 0-69-20t-64-20q-43 0-64 20t-69 20q-47 0-70-20t-63-20q-35 0-55.5 20T106-252Zm61-224 19-19 57 55h89v-173l-53 39-17-22 218-161 217 160-17 23-52-38v172h89l57-55 19 19-64 64H229l-62-64Zm193 36h106v-80h28v80h106v-193l-120-89-120 88v194Zm0 0h240-240Z"/>
    </Icon>
  );
});

IconMaterialHouseboatW100.displayName = 'OnesyIconMaterialHouseboatW100';

export default IconMaterialHouseboatW100;
