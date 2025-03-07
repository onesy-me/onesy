import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplit'

      short_name='VerticalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400q0 17-11.5 28.5T400-360H160Zm0 160q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h240q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200H160Zm0-320q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h240q17 0 28.5 11.5T440-560q0 17-11.5 28.5T400-520H160Zm0-160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h240q17 0 28.5 11.5T440-720q0 17-11.5 28.5T400-680H160Zm440 480q-33 0-56.5-23.5T520-280v-400q0-33 23.5-56.5T600-760h160q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H600Zm0-80h160v-400H600v400Zm80-200Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplit.displayName = 'OnesyIconMaterialVerticalSplit';

export default IconMaterialVerticalSplit;
