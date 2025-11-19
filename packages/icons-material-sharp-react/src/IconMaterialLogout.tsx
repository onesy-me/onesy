import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogout = (props: IIcon) => {

  return (
    <Icon
      name='Logout'

      short_name='Logout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h360v80H200v560h280v80H120Zm520-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialLogout.displayName = 'OnesyIconMaterialLogout';

export default IconMaterialLogout;
