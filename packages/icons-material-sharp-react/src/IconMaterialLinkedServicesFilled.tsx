import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkedServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedServicesFilled'

      short_name='LinkedServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-600q-57 0-99-34t-56-86H354q-11 42-41.5 72.5T240-606v251q52 14 86 56t34 99q0 66-47 113T200-40q-66 0-113-47T40-200q0-57 34-99t86-56v-251q-52-14-86-56t-34-98q0-66 47-113t113-47q56 0 98 34t56 86h251q14-52 56-86t99-34q66 0 113 47t47 113q0 66-47 113t-113 47Zm0 560q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T760-40Z"/>
    </Icon>
  );
});

IconMaterialLinkedServicesFilled.displayName = 'OnesyIconMaterialLinkedServicesFilled';

export default IconMaterialLinkedServicesFilled;
