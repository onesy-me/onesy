import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoCrashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashFilled'

      short_name='NoCrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-818 114-114q11-11 28-11t28 11q11 11 11 28t-11 28L508-734q-12 12-28 12t-28-12l-57-56q-12-11-11.5-27.5T395-846q12-12 28.5-12t28.5 12l28 28ZM120-60v-286q0-7 1-14t3-13l75-213q8-24 29-39t47-15h410q26 0 47 15t29 39l75 213q2 6 3 13t1 14v286q0 25-17.5 42.5T780 0q-25 0-42.5-17.5T720-60v-20H240v20q0 25-17.5 42.5T180 0q-25 0-42.5-17.5T120-60Zm112-380h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200Zm360 0q25 0 42.5-17.5T720-260q0-25-17.5-42.5T660-320q-25 0-42.5 17.5T600-260q0 25 17.5 42.5T660-200Z"/>
    </Icon>
  );
});

IconMaterialNoCrashFilled.displayName = 'OnesyIconMaterialNoCrashFilled';

export default IconMaterialNoCrashFilled;
