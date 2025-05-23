import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelicopterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelicopterFilled'

      short_name='Helicopter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M190-609q-32 33-51 76t-19 93h240v-240q-50 0-94 19t-76 52ZM160-80q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160h320q17 0 28.5 11.5T520-120q0 17-11.5 28.5T480-80H160Zm-40-120q-33 0-56.5-23.5T40-280v-160q0-134 93-227t227-93h160q33 0 56.5 23.5T600-680v120h200l29-58q5-11 15-16.5t21-5.5h15q17 0 28.5 11.5T920-600v168q0 31-20.5 53.5T848-353l-248 25v48q0 33-23.5 56.5T520-200H120Zm40-600q-17 0-28.5-11.5T120-840q0-17 11.5-28.5T160-880h560q17 0 28.5 11.5T760-840q0 17-11.5 28.5T720-800H160Z"/>
    </Icon>
  );
});

IconMaterialHelicopterFilled.displayName = 'OnesyIconMaterialHelicopterFilled';

export default IconMaterialHelicopterFilled;
