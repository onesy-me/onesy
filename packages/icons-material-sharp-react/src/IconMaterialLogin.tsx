import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogin = (props: IIcon) => {

  return (
    <Icon
      name='Login'

      short_name='Login'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120v-80h280v-560H480v-80h360v720H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialLogin.displayName = 'OnesyIconMaterialLogin';

export default IconMaterialLogin;
