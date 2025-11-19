import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPixel9ProFoldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pixel9ProFoldW100'

      short_name='Pixel9ProFold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Zm288-28h288q12 0 22-10t10-22v-496q0-12-10-22t-22-10H480v560ZM226-506h160q6 0 10-4t4-10q0-6-4-10t-10-4H226q-6 0-10 4t-4 10q0 6 4 10t10 4Zm414-146q11 0 19.5-8.5T668-680q0-11-8.5-19.5T640-708q-11 0-19.5 8.5T612-680q0 11 8.5 19.5T640-652Zm-414-14h160q6 0 10-4t4-10q0-6-4-10t-10-4H226q-6 0-10 4t-4 10q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialPixel9ProFoldW100.displayName = 'OnesyIconMaterialPixel9ProFoldW100';

export default IconMaterialPixel9ProFoldW100;
