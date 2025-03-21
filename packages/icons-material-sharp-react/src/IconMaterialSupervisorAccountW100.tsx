import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupervisorAccountW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccountW100'

      short_name='SupervisorAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M674-432q-30 0-52-22t-22-52q0-30 22-52t52-22q30 0 52 22t22 52q0 30-22 52t-52 22ZM500-232v-30q0-17 8.33-30.53Q516.67-306.06 532-312q33.13-14 68.57-21 35.43-7 73.43-7 35.97 0 71.49 7Q781-326 816-312q15.33 5.94 23.67 19.47Q848-279 848-262v30H500ZM380-512q-44.55 0-76.27-31.72Q272-575.45 272-620t31.73-76.28Q335.45-728 380-728t76.27 31.72Q488-664.55 488-620t-31.73 76.28Q424.55-512 380-512Zm0-108ZM112-232v-52q0-23.54 13.5-43.27Q139-347 162-356q51-26 105.96-39 54.95-13 112.04-13 21 0 42 1.5t42 4.5l-12 13-12 13q-15-2.5-30-3.25t-30-.75q-53 0-105 11t-99 37q-14 8-25 19.5T140-284v24h240v28H112Zm268-28Zm0-280q33 0 56.5-23.5T460-620q0-33-23.5-56.5T380-700q-33 0-56.5 23.5T300-620q0 33 23.5 56.5T380-540Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccountW100.displayName = 'OnesyIconMaterialSupervisorAccountW100';

export default IconMaterialSupervisorAccountW100;
