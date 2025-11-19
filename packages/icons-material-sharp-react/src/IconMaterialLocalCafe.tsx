import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalCafe = (props: IIcon) => {

  return (
    <Icon
      name='LocalCafe'

      short_name='LocalCafe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80h640v80H160Zm0-160v-560h720v280H720v280H160Zm80-80h400v-400H240v400Zm480-280h80v-120h-80v120ZM240-360h400-400Z"/>
    </Icon>
  );
};

IconMaterialLocalCafe.displayName = 'OnesyIconMaterialLocalCafe';

export default IconMaterialLocalCafe;
