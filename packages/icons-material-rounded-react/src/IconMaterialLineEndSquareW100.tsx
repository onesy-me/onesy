import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndSquareW100'

      short_name='LineEndSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M550-370h220v-220H550v220Zm2 28q-12.75 0-21.37-8.63Q522-359.25 522-372v-94H150q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h372v-94q0-12.75 8.63-21.38Q539.25-618 552-618h216q12.75 0 21.38 8.62Q798-600.75 798-588v216q0 12.75-8.62 21.37Q780.75-342 768-342H552Zm108-138Z"/>
    </Icon>
  );
});

IconMaterialLineEndSquareW100.displayName = 'OnesyIconMaterialLineEndSquareW100';

export default IconMaterialLineEndSquareW100;
