import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdW100 = (props: IIcon) => {

  return (
    <Icon
      name='AdW100'

      short_name='Ad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-432H200v432Z"/>
    </Icon>
  );
};

IconMaterialAdW100.displayName = 'OnesyIconMaterialAdW100';

export default IconMaterialAdW100;
