import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenW100Filled'

      short_name='FileOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M736-294h131q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H753l135 135q4 3.75 4 9.37 0 5.63-4 9.63-4 5-10 4.5t-10-4.5L734-246v113q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-131q0-12.75 8.63-21.38Q723.25-294 736-294ZM572-800v118.4q0 12.58 8.51 21.09T601.6-652H720L572-800Zm-300-28h289q12.44 0 23.72 5T604-810l126 126q8 8 13 19.28 5 11.28 5 23.72v237q0 12.75-8.62 21.37Q730.75-374 718-374h-62q-12.75 0-21.37 8.7-8.63 8.69-8.63 21.55v181.5q0 12.86-8.62 21.55-8.63 8.7-21.38 8.7H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17Z"/>
    </Icon>
  );
});

IconMaterialFileOpenW100Filled.displayName = 'OnesyIconMaterialFileOpenW100Filled';

export default IconMaterialFileOpenW100Filled;
