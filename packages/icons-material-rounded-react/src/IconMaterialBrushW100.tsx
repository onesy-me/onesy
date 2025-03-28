import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrushW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushW100'

      short_name='Brush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-192q-17.26 0-34.13-4T194-208q18-17 28-39.5t10-52.5q0-29 19.5-48.5T300-368q29 0 48.5 19.5T368-300q0 44.55-31.73 76.27Q304.55-192 260-192Zm0-28q33 0 56.5-23.5T340-300q0-17-11.5-28.5T300-340q-17 0-28.5 11.5T260-300q0 23-5.5 42T240-222q5 2 10 2h10Zm184-166-56-56 318-318q11-11 27.5-11.5T762-760q12 12 12 28t-12 28L444-386Zm-144 86Z"/>
    </Icon>
  );
});

IconMaterialBrushW100.displayName = 'OnesyIconMaterialBrushW100';

export default IconMaterialBrushW100;
