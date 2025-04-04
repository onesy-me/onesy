import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEggW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggW100'

      short_name='Egg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-291h14v-28h-14q-60.83 0-103.42-42.58Q374-404.17 374-465v-14h-28v14q0 72.21 50.9 123.1Q447.79-291 520-291Zm-41.22 120Q383-171 316.5-240T250-407.3q0-64.7 21-132.2 21-67.5 54.5-123t74.04-91Q440.08-789 479-789q39 0 79.71 34.93 40.72 34.93 74.03 90.39 33.31 55.45 54.29 123.56Q708-472 708-407.3q0 98.3-66.72 167.3-66.72 69-162.5 69Zm.22-28q84 0 142.5-60.5T680-406.56q0-59.44-19-121.94t-48.5-114q-29.5-51.5-65.19-85Q511.63-761 479-761q-33 0-68.5 33.5t-65 85.5Q316-590 297-527.5T278-407q0 87 58.5 147.5T479-199Zm0-281Z"/>
    </Icon>
  );
});

IconMaterialEggW100.displayName = 'OnesyIconMaterialEggW100';

export default IconMaterialEggW100;
