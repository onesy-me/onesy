import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvWithAssistant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvWithAssistant'

      short_name='TvWithAssistant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-460q17 0 28.5-11.5T460-500q0-17-11.5-28.5T420-540q-17 0-28.5 11.5T380-500q0 17 11.5 28.5T420-460Zm120 0q17 0 28.5-11.5T580-500q0-17-11.5-28.5T540-540q-17 0-28.5 11.5T500-500q0 17 11.5 28.5T540-460Zm-240 0q17 0 28.5-11.5T340-500q0-17-11.5-28.5T300-540q-17 0-28.5 11.5T260-500q0 17 11.5 28.5T300-460Zm360 0q17 0 28.5-11.5T700-500q0-17-11.5-28.5T660-540q-17 0-28.5 11.5T620-500q0 17 11.5 28.5T660-460ZM160-120v-80H80v-600h800v600h-80v80h-40l-26-80H227l-27 80h-40Zm0-160h640v-440H160v440Zm320-220Z"/>
    </Icon>
  );
});

IconMaterialTvWithAssistant.displayName = 'OnesyIconMaterialTvWithAssistant';

export default IconMaterialTvWithAssistant;
