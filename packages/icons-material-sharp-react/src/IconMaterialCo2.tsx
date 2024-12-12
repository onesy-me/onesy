import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCo2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2'

      short_name='Co2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360v-240h200v240H400Zm60-60h80v-120h-80v120Zm-340 60v-240h200v80h-60v-20h-80v120h80v-20h60v80H120Zm560 120v-140h120v-40H680v-60h180v140H740v40h120v60H680Z"/>
    </Icon>
  );
});

IconMaterialCo2.displayName = 'OnesyIconMaterialCo2';

export default IconMaterialCo2;
