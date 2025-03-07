import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundDotLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundDotLargeW100'

      short_name='BackgroundDotLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M370-340q12.5 0 21.25-8.75T400-370q0-12.5-8.75-21.25T370-400q-12.5 0-21.25 8.75T340-370q0 12.5 8.75 21.25T370-340Zm0-220q12.5 0 21.25-8.75T400-590q0-12.5-8.75-21.25T370-620q-12.5 0-21.25 8.75T340-590q0 12.5 8.75 21.25T370-560Zm220 220q12.5 0 21.25-8.75T620-370q0-12.5-8.75-21.25T590-400q-12.5 0-21.25 8.75T560-370q0 12.5 8.75 21.25T590-340Zm0-220q12.5 0 21.25-8.75T620-590q0-12.5-8.75-21.25T590-620q-12.5 0-21.25 8.75T560-590q0 12.5 8.75 21.25T590-560ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialBackgroundDotLargeW100.displayName = 'OnesyIconMaterialBackgroundDotLargeW100';

export default IconMaterialBackgroundDotLargeW100;
