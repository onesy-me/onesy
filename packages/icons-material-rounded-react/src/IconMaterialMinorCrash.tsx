import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinorCrash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinorCrash'

      short_name='MinorCrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M348-732q-11 11-28 11t-28-11l-64-64q-11-11-11-28t11-28q11-11 28-11t28 11l64 64q11 11 11 28t-11 28Zm264 0q-11-11-11-28t11-28l64-64q11-11 28-11t28 11q11 11 11 28t-11 28l-64 64q-11 11-28 11t-28-11Zm-132-28q-17 0-28.5-11.5T440-800v-120q0-17 11.5-28.5T480-960q17 0 28.5 11.5T520-920v120q0 17-11.5 28.5T480-760ZM120-60v-286q0-7 1-14t3-13l75-213q8-24 29-39t47-15h410q26 0 47 15t29 39l75 213q2 6 3 13t1 14v286q0 25-17.5 42.5T780 0q-25 0-42.5-17.5T720-60v-20H240v20q0 25-17.5 42.5T180 0q-25 0-42.5-17.5T120-60Zm112-380h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200Zm360 0q25 0 42.5-17.5T720-260q0-25-17.5-42.5T660-320q-25 0-42.5 17.5T600-260q0 25 17.5 42.5T660-200Zm-460 40h560v-200H200v200Zm0 0v-200 200Z"/>
    </Icon>
  );
});

IconMaterialMinorCrash.displayName = 'OnesyIconMaterialMinorCrash';

export default IconMaterialMinorCrash;
