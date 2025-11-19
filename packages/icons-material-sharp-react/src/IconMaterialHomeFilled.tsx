import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeFilled = (props: IIcon) => {

  return (
    <Icon
      name='HomeFilled'

      short_name='Home'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/>
    </Icon>
  );
};

IconMaterialHomeFilled.displayName = 'OnesyIconMaterialHomeFilled';

export default IconMaterialHomeFilled;
