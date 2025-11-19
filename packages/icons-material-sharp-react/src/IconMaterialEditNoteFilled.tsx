import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNoteFilled = (props: IIcon) => {

  return (
    <Icon
      name='EditNoteFilled'

      short_name='EditNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l263-262 123 122-263 263H520Zm263-224 37-39-37-37-38 38 38 38Z"/>
    </Icon>
  );
};

IconMaterialEditNoteFilled.displayName = 'OnesyIconMaterialEditNoteFilled';

export default IconMaterialEditNoteFilled;
