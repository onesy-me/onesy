import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialErrorMedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorMedW100'

      short_name='ErrorMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m443-406 74-101 73 101 94-128-23-16-71 97-73-101-74 101-74-101-93 128 23 16 70-97 74 101Zm37.17 274q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialErrorMedW100.displayName = 'OnesyIconMaterialErrorMedW100';

export default IconMaterialErrorMedW100;
