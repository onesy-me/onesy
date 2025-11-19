import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClearAll = (props: IIcon) => {

  return (
    <Icon
      name='ClearAll'

      short_name='ClearAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/>
    </Icon>
  );
};

IconMaterialClearAll.displayName = 'OnesyIconMaterialClearAll';

export default IconMaterialClearAll;
