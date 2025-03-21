import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignStretchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStretchW100'

      short_name='AlignStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-586q-12.75 0-21.37-8.63Q306-603.25 306-616v-184H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H654v184q0 12.75-8.62 21.37Q636.75-586 624-586H336ZM146-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h160v-184q0-12.75 8.63-21.38Q323.25-374 336-374h288q12.75 0 21.38 8.62Q654-356.75 654-344v184h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Z"/>
    </Icon>
  );
});

IconMaterialAlignStretchW100.displayName = 'OnesyIconMaterialAlignStretchW100';

export default IconMaterialAlignStretchW100;
