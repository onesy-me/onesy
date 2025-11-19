import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfy = (props: IIcon) => {

  return (
    <Icon
      name='ViewComfy'

      short_name='ViewComfy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm720-360v-200H160v200h640ZM400-240h400v-200H400v200Zm-240 0h160v-200H160v200Z"/>
    </Icon>
  );
};

IconMaterialViewComfy.displayName = 'OnesyIconMaterialViewComfy';

export default IconMaterialViewComfy;
