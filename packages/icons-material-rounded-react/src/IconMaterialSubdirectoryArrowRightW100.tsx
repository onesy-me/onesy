import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubdirectoryArrowRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRightW100'

      short_name='SubdirectoryArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M550-182q-5-5-4.5-10.5t4.5-9.5l144-144H312q-25 0-42.5-17.5T252-406v-328q0-6 4-10t10-4q6 0 10 4t4 10v328q0 14 9 23t23 9h382L550-518q-5-5-5-10t5-10q5-5 10.5-4.5t9.5 4.5l157 157q5 5 7 10t2 11q0 6-2 11t-7 10L570-182q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRightW100.displayName = 'OnesyIconMaterialSubdirectoryArrowRightW100';

export default IconMaterialSubdirectoryArrowRightW100;
