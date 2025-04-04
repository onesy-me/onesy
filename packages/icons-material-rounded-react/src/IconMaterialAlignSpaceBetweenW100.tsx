import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceBetweenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceBetweenW100'

      short_name='AlignSpaceBetween'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h160v-38q0-12.75 8.63-21.38Q323.25-228 336-228h288q12.75 0 21.38 8.62Q654-210.75 654-198v38h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm190-600q-12.75 0-21.37-8.63Q306-749.25 306-762v-38H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H654v38q0 12.75-8.62 21.37Q636.75-732 624-732H336Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceBetweenW100.displayName = 'OnesyIconMaterialAlignSpaceBetweenW100';

export default IconMaterialAlignSpaceBetweenW100;
