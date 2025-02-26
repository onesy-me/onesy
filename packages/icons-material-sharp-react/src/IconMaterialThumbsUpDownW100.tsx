import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbsUpDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownW100'

      short_name='ThumbsUpDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M26-438v-306l190-190 22 22-38 166h254v75L352-438H26Zm28-28h280l92-214v-38H166l36-162L54-732v266ZM744-26l-22-22 38-166H506v-75l102-233h326v306L744-26Zm14-54 148-148v-266H626l-92 214v38h260L758-80ZM54-466v-266 266Zm852 238v-266 266Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownW100.displayName = 'OnesyIconMaterialThumbsUpDownW100';

export default IconMaterialThumbsUpDownW100;
