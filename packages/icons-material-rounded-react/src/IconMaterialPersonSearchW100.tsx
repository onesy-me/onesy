import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearchW100'

      short_name='PersonSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-512q-44.55 0-76.27-31.72Q332-575.45 332-620t31.73-76.28Q395.45-728 440-728t76.28 31.72Q548-664.55 548-620t-31.72 76.28Q484.55-512 440-512Zm0-28q33 0 56.5-23.5T520-620q0-33-23.5-56.5T440-700q-33 0-56.5 23.5T360-620q0 33 23.5 56.5T440-540Zm388 428-90-90q-19 14-39 20t-38.79 6Q608-176 572-212.24q-36-36.23-36-88Q536-352 572.24-388q36.23-36 88-36Q712-424 748-387.83q36 36.16 36 87.83 0 19-6 39t-20 39l90 90q4 4 4.5 9.5T848-112q-5 5-10 5t-10-5Zm-168-92q41 0 68.5-27.5T756-300q0-41-27.5-68.5T660-396q-41 0-68.5 27.5T564-300q0 41 27.5 68.5T660-204Zm-488-58v-22q0-23 13.5-41.5T222-356q39-20 104.5-38T465-407q6 1 10 4.72 4 3.73 4 9 0 5.28-4 9.28-4 4-10 4-76-3-138 15t-91 33q-17 8-26.5 20.67Q200-298.67 200-284v24h250q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H202q-13 0-21.5-8.5T172-262Zm268-358Zm20 360Z"/>
    </Icon>
  );
});

IconMaterialPersonSearchW100.displayName = 'OnesyIconMaterialPersonSearchW100';

export default IconMaterialPersonSearchW100;
