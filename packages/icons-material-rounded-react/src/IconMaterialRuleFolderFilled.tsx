import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRuleFolderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderFilled'

      short_name='RuleFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm153-258-29-29q-12-12-28-11.5T228-446q-11 12-11.5 28t11.5 28l57 57q12 12 28 12t28-12l142-142q12-12 12-28t-12-28q-12-12-28.5-12T426-531L313-418Zm327-63-36-36q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l36-36 36 36q11 11 28 11t28-11q11-11 11-28t-11-28l-36-36 36-36q11-11 11-28t-11-28q-11-11-28-11t-28 11l-36 36Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderFilled.displayName = 'OnesyIconMaterialRuleFolderFilled';

export default IconMaterialRuleFolderFilled;
