import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeHealth = (props: IIcon) => {

  return (
    <Icon
      name='HomeHealth'

      short_name='HomeHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-280h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
};

IconMaterialHomeHealth.displayName = 'OnesyIconMaterialHomeHealth';

export default IconMaterialHomeHealth;
