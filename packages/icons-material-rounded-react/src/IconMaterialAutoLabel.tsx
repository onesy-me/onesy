import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoLabel'

      short_name='AutoLabel'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856q-33 0-56.5-23.5T120 776V376q0-33 23.5-56.5T200 296h400q20 0 37.5 9t28.5 25l141 200q15 21 15 46t-15 46L666 822q-11 16-28.5 25t-37.5 9H200Zm0-80h400l142-200-142-200H200v400Zm0-200v200-400 200Zm171 50 32 70q5 12 18 12t18-12l32-70 70-32q12-5 12-18t-12-18l-70-32-32-70q-5-12-18-12t-18 12l-32 70-70 32q-12 5-12 18t12 18l70 32Z"/>
    </Icon>
  );
});

IconMaterialAutoLabel.displayName = 'OnesyIconMaterialAutoLabel';

export default IconMaterialAutoLabel;
