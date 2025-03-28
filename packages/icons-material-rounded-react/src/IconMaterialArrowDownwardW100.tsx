import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDownwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardW100'

      short_name='ArrowDownward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-266v-468q0-6 4-10t10-4q6 0 10 4t4 10v468l224-224q4-4 9.5-4.5T738-490q5 5 5 10t-5 10L501-233q-5 5-10 7t-11 2q-6 0-11-2t-10-7L222-470q-4-4-4.5-9.5T222-490q5-5 10-5t10 5l224 224Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardW100.displayName = 'OnesyIconMaterialArrowDownwardW100';

export default IconMaterialArrowDownwardW100;
