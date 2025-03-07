import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrikethroughSFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSFilled'

      short_name='StrikethroughS'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M486-160q-63 0-116.5-33.5T285-283q-9-16-2.5-33.5T306-343q18-10 37.5-3.5T374-322q18 30 48.5 48t65.5 18q44 0 76.5-27t32.5-69q0-20 14-34t34-14q20 0 34.5 14t14.5 34v12q0 79-62.5 129.5T486-160ZM120-480q-17 0-28.5-11.5T80-520q0-17 11.5-28.5T120-560h720q17 0 28.5 11.5T880-520q0 17-11.5 28.5T840-480H120Zm208-165q-17-10-23-29.5t4-36.5q25-47 72-71t101-24q48 0 90.5 20t71.5 58q11 14 7 32t-19 29q-17 12-36.5 9T562-677q-15-17-35-25t-43-8q-27 0-52 11t-38 34q-10 18-29.5 24t-36.5-4Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSFilled.displayName = 'OnesyIconMaterialStrikethroughSFilled';

export default IconMaterialStrikethroughSFilled;
