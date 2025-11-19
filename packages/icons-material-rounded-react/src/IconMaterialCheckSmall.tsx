import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckSmall = (props: IIcon) => {

  return (
    <Icon
      name='CheckSmall'

      short_name='CheckSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-416 236-236q11-11 28-11t28 11q11 11 11 28t-11 28L428-332q-12 12-28 12t-28-12L268-436q-11-11-11-28t11-28q11-11 28-11t28 11l76 76Z"/>
    </Icon>
  );
};

IconMaterialCheckSmall.displayName = 'OnesyIconMaterialCheckSmall';

export default IconMaterialCheckSmall;
