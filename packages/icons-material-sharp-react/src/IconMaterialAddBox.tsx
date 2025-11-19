import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddBox = (props: IIcon) => {

  return (
    <Icon
      name='AddBox'

      short_name='AddBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialAddBox.displayName = 'OnesyIconMaterialAddBox';

export default IconMaterialAddBox;
