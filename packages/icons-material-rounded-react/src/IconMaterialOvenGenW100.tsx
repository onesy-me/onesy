import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOvenGenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenGenW100'

      short_name='OvenGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-334v274q0 12 10 22t22 10h496q12 0 22-10t10-22v-274H628v174H332v-174H200Zm160 146h240v-146H360v146ZM200-534h560v-194q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v194Zm118-96q-11 0-19.5-8.5T290-658q0-11 8.5-19.5T318-686q11 0 19.5 8.5T346-658q0 11-8.5 19.5T318-630Zm160 0q-11 0-19.5-8.5T450-658q0-11 8.5-19.5T478-686q11 0 19.5 8.5T506-658q0 11-8.5 19.5T478-630Zm160 0q-11 0-19.5-8.5T610-658q0-11 8.5-19.5T638-686q11 0 19.5 8.5T666-658q0 11-8.5 19.5T638-630Z"/>
    </Icon>
  );
});

IconMaterialOvenGenW100.displayName = 'OnesyIconMaterialOvenGenW100';

export default IconMaterialOvenGenW100;
