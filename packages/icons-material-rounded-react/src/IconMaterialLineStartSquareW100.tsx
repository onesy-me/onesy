import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquareW100'

      short_name='LineStartSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M190-370h220v-220H190v220Zm2 28q-12.75 0-21.37-8.63Q162-359.25 162-372v-216q0-12.75 8.63-21.38Q179.25-618 192-618h216q12.75 0 21.38 8.62Q438-600.75 438-588v94h372q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H438v94q0 12.75-8.62 21.37Q420.75-342 408-342H192Zm108-138Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquareW100.displayName = 'OnesyIconMaterialLineStartSquareW100';

export default IconMaterialLineStartSquareW100;
