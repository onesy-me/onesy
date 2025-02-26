import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOvenGenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenGenW100Filled'

      short_name='OvenGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-506v274q0 26 17 43t43 17h496q26 0 43-17t17-43v-274H628v174H332v-174H172Zm188 146h240v-146H360v146ZM172-534h616v-194q0-26-17-43t-43-17H232q-26 0-43 17t-17 43v194Zm146-96q-11 0-19.5-8.5T290-658q0-11 8.5-19.5T318-686q11 0 19.5 8.5T346-658q0 11-8.5 19.5T318-630Zm160 0q-11 0-19.5-8.5T450-658q0-11 8.5-19.5T478-686q11 0 19.5 8.5T506-658q0 11-8.5 19.5T478-630Zm160 0q-11 0-19.5-8.5T610-658q0-11 8.5-19.5T638-686q11 0 19.5 8.5T666-658q0 11-8.5 19.5T638-630Z"/>
    </Icon>
  );
});

IconMaterialOvenGenW100Filled.displayName = 'OnesyIconMaterialOvenGenW100Filled';

export default IconMaterialOvenGenW100Filled;
