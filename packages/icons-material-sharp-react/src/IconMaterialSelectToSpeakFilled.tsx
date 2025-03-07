import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectToSpeakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectToSpeakFilled'

      short_name='SelectToSpeak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131Zm-80-29L280-360H120v-240h160l200-200v640Zm80-160v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM40-680v-240h240v80H120v160H40ZM680-40v-80h160v-160h80v240H680Z"/>
    </Icon>
  );
});

IconMaterialSelectToSpeakFilled.displayName = 'OnesyIconMaterialSelectToSpeakFilled';

export default IconMaterialSelectToSpeakFilled;
