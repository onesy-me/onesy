import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitnessTrackers = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessTrackers'

      short_name='FitnessTrackers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-80-36-120H80v-560h44l36-120h240l36 120h44v560h-44L400-80H160Zm60-80h120l12-40H208l12 40Zm-60-120h240v-400H160v400Zm48-480h144l-12-40H220l-12 40ZM560-80v-520h-40v-120h40v-160h320v160h40v120h-40v520H560Zm80-540v460h160v-460H640Zm0-80h160v-100H640v100ZM280-200Zm0-560Z"/>
    </Icon>
  );
});

IconMaterialFitnessTrackers.displayName = 'OnesyIconMaterialFitnessTrackers';

export default IconMaterialFitnessTrackers;
